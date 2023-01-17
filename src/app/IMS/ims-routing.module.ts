import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { AddCategoriesComponent } from './pages/add-categories/add-categories.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'products/add',
        component: AddProductsComponent,
      },
      {
        path: 'products/edit/:id',
        component: AddProductsComponent,
      },
      {
        path: 'categories/add',
        component: AddCategoriesComponent,
      },
      {
        path: 'categories/edit/:id',
        component: AddCategoriesComponent,
      },
      {
        path: 'users/create',
        component: CreateUsersComponent,
      },
      {
        path: 'users/edit/:id',
        component: CreateUsersComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IMSRoutingModule { }
