import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Category } from '../../interfaces/products';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styles: [],
})
export class AddCategoriesComponent {
  category: Category = {
    category_name: '',
    category_description: '',
  };

  categoriesForm: FormGroup = this.fb.group({
    category_name: [
      this.category.category_name,
      [Validators.required, Validators.minLength(3)],
    ],
    category_description: [
      this.category.category_description,
      [Validators.required, Validators.minLength(5)],
    ],
  });

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.categoriesService.getCategoriesById(id)))
        .subscribe((category) => {
          this.category = category;
          this.categoriesForm.patchValue(this.category);
        });
    }
  }

  validateFields(field: string) {
    return (
      this.categoriesForm.controls[`${field}`].errors &&
      this.categoriesForm.controls[`${field}`].touched
    );
  }

  saveCategory() {
    if (this.categoriesForm.invalid) {
      this.categoriesForm.markAllAsTouched();
      return;
    } else {
      if (this.category.id) {
        this.categoriesService.editCategories( this.categoriesForm.value, this.category.id).subscribe(
          (resp) => {
            alert('Category updated succesfully');
            this.router.navigate(['/categories']);
          });
      } else {
        this.categoriesService
          .createCategories(this.categoriesForm.value)
          .subscribe((resp) => {
            alert('Category added succesfully');
            this.router.navigate(['/categories']);
          });
      }
        
    }
  }
}
