import { ProductService } from './../Service/product.service';
import { ProductComponent } from './../product/product.component';
import { ProductType } from './../product';
import { DataProduct } from './../data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=DataProduct;
  selectedProduct: ProductType;

  constructor(private productService: ProductService) {

  }


  ngOnInit() {
    this.getProducts();
  }


  getProducts()
  {
    this.products = this.productService.getProduct();
  }
  deleteProduct(id)
  {

      this.products = this.products.filter(item => item.id !== id);
  }
  detailProduct(product) {
    this.selectedProduct = product;
  }
}
