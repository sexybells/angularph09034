import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
{
  path: "products", component: ProductsComponent
},
{
  path: "" , redirectTo: '/home', pathMatch: "full"
},
{
  path: "home", component: HomeComponent
},
{
  path: "product/:id", component: ProductDetailComponent
},
{
  path:"**", component: NotfoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
