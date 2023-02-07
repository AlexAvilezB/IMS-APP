import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMSRoutingModule } from './ims-routing.module';
import { AddCategoriesComponent } from './pages/add-categories/add-categories.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { SanityPipe } from './pipes/sanity.pipe';


@NgModule({
  declarations: [
    AddCategoriesComponent,
    AddProductsComponent,
    CreateUsersComponent,
    ProductsComponent,
    CategoriesComponent,
    UsersComponent,
    HomeComponent,
    ConfirmComponent,
    DashboardComponent,
    GraphicComponent,
    SanityPipe,
  ],
  imports: [
    CommonModule,
    IMSRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class IMSModule { }
