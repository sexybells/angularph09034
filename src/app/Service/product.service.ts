import { ProductComponent } from './../product/product.component';
import { ProductsComponent } from './../products/products.component';
import { DataProduct } from './../data';
import { Injectable } from '@angular/core';
import { ProductType } from './../product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private product = DataProduct;
  getProduct(): ProductType[]{
    return this.product;
  }
}
