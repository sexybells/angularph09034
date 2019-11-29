import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedmenuComponent } from './fixedmenu/fixedmenu.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DescComponent } from './desc/desc.component';
import { BodynewsComponent } from './bodynews/bodynews.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    FixedmenuComponent,
    BannerComponent,
    FooterComponent,
    IntroductionComponent,
    DescComponent,
    BodynewsComponent,
    ProductComponent,
    ProductsComponent,
    ManagerComponent,
    ProductDetailComponent,
    AddproductComponent,
    HomeComponent,
    NotfoundComponent,
    ProductAddComponent,
    ProductEditComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
