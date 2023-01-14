import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category, Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styles: [],
})
export class AddProductsComponent implements OnInit {
  categories: Category[] = [];

  productsForm: FormGroup = this.fb.group({
    product_name: [null, [Validators.required, Validators.minLength(3)]],
    description: [null, [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(1)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
    categoria: [null, [Validators.required]],
  });

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productService.getCategories().subscribe((resp) => {
      this.categories = resp;
    });
  }

  ngOnInit(): void {
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
      // this.productService.createProduct(this.product).subscribe( resp => {
      //   console.log( resp );
      //   this.router.navigate(['/products']);
      // })
    }
  }
}