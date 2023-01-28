import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Category, Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styles: [],
})
export class AddProductsComponent implements OnInit {
  categories: Category[] = [];
  product: Product = {
    product_name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: {
      category_name: '',
      category_description: '',
      isActive: false
    },
  };

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.productService.getProductById(id)))
        .subscribe((product) => {
          this.product = product;
          this.productsForm.patchValue(this.product);
        });
    }
  }

  productsForm: FormGroup = this.fb.group({
    product_name: [
      this.product.product_name,
      [Validators.required, Validators.minLength(3)],
    ],
    description: [
      this.product.description,
      [Validators.required, Validators.minLength(5)],
    ],
    price: [this.product.price, [Validators.required, Validators.min(1)]],
    quantity: [this.product.quantity, [Validators.required, Validators.min(0)]],
    category: [this.product.category.category_name, [Validators.required]],
  });

  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackService: SnackBarService
  ) {
    this.categoriesService.getCategories().subscribe((resp) => {
      this.categories = resp;
    });
  }

  validateFields(field: string) {
    return (
      this.productsForm.controls[`${field}`].errors &&
      this.productsForm.controls[`${field}`].touched
    );
  }

  saveProduct() {
    if (this.productsForm.invalid) {
      this.productsForm.markAllAsTouched();
      return;
    } else {
      this.productsForm.value.category = {
        category_name: this.productsForm.value.category,
      };
      if (this.product.id) {
        this.productService
          .editProduct(this.productsForm.value, this.product.id)
          .subscribe((resp) => {
            this.snackService.showSnack('Product Updated Succesfully');
            this.router.navigate(['/products']);
          });
      } else {
        this.productService
          .createProduct(this.productsForm.value)
          .subscribe((resp) => {
            this.snackService.showSnack('Product Added Succesfully');
            this.router.navigate(['/products']);
          });
      }
    }
  }
}
