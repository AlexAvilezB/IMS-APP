import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/products';
import { SnackBarService } from '../../services/snack-bar.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

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

      .disabled {
        opacity: 0.7;
      }
    `,
  ],
})
export class CategoriesComponent implements AfterViewInit {
  constructor(
    private categoriesService: CategoriesService,
    private snackService: SnackBarService,
    private dialog: MatDialog
  ) {}

  categories: Category[] = [];
  category!: Category;

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'active',
    'actions',
  ];

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

  statusColor(status: boolean) {
    if (status) {
      return;
    } else {
      return 'disabled';
    }
  }

  // deleteCategory(id: number) {

  //   this.categoriesService.getCategoriesById(id).subscribe((resp) => {
  //     this.category = resp;
  //     const dialog = this.dialog.open(ConfirmComponent, {
  //       width: '250px',
  //       data: this.category.category_name,
  //     });

  //     dialog.afterClosed().subscribe((res) => {
  //       if (res == true) {
  //         this.categoriesService.deleteCategories(id).subscribe((resp) => {
  //           this.snackService.showSnack(`${this.category.category_name} deleted succesfully`);
  //           this.ngAfterViewInit();
  //         });
  //       }
  //     });
  //   });
  // }
}
