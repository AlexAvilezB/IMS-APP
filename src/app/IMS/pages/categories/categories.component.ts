import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/products';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
    `
      td,
      th {
        text-align: center !important;
        vertical-align: middle !important;
      }

      .mat-sort-header-container {
        justify-content: center !important;
      }
    `,
  ],
})
export class CategoriesComponent implements AfterViewInit {
  constructor(
    private categoriesService: CategoriesService,
    private snackService: SnackBarService
    ) {}

  categories: Category[] = [];

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  dataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCategory(id: number) {
    this.categoriesService.deleteCategories(id).subscribe((resp) => {
      this.snackService.showSnack('Category Deleted Succesfully');
      this.ngAfterViewInit();
    });
  }
}
