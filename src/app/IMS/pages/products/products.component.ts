import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
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
export class ProductsComponent implements AfterViewInit {
  constructor(
    private productsService: ProductsService,
    private snackService: SnackBarService,
    private dialog: MatDialog
  ) {}

  products: Product[] = [];
  product!: Product;

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'category',
    'price',
    'quantity',
    'isActive',
    'actions',
  ];

  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
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

  // deleteProduct(id: number) {

  //   this.productsService.getProductById(id).subscribe((resp) => {
  //     this.product = resp;
  //     const dialog = this.dialog.open(ConfirmComponent, {
  //       width: '250px',
  //       data: this.product.product_name,
  //     });

  //     dialog.afterClosed().subscribe((res) => {
  //       if (res == true) {
  //         this.productsService.deleteProduct(id).subscribe((resp) => {
  //           this.snackService.showSnack(`${this.product.product_name} deleted succesfully`);
  //           this.ngAfterViewInit();
  //         });
  //       }
  //     });
  //   });
  // }
}
