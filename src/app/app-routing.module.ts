import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductfbComponent } from './add-productfb/add-productfb.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'home', 
    component: HomeComponent
  }, 
  {
    path: 'products', 
    component: ProductsComponent
  }, 
  {
    path: 'newproduct', 
    component: AddProductComponent
  }, 
  {
    path: 'newproductfb', 
    component: AddProductfbComponent
  }, 
  {
    path: 'newcategory', 
    component: AddCategoryComponent
  }, 
  {
    path: 'obs', 
    component: ObsComponent
  }, 
  {
    path: "**", 
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
