import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

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
    `,
  ],
})
export class ProductsComponent implements AfterViewInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'category',
    'price',
    'quantity',
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
    console.log(event);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct( id: number ) {
    this.productsService.deleteProduct(id).subscribe( resp => {
      alert('Product deleted succesfully');
      this.ngAfterViewInit();
    });
  }
}
