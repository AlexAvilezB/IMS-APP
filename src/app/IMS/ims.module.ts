import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMSRoutingModule } from './ims-routing.module';
import { AddCategoriesComponent } from './pages/add-categories/add-categories.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AddCategoriesComponent,
    AddProductsComponent,
    CreateUsersComponent,
    ProductsComponent,
    CategoriesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    IMSRoutingModule
  ]
})
export class IMSModule { }
