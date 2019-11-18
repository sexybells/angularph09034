import { ProductsComponent } from './../products/products.component';
import { DataProduct } from './../data';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  manager = DataProduct;
  selectedProduct:ProductsComponent;
  getProducts()
  {
    this.manager = this.productService.getProduct();
  }
  deleteProduct(id){
    this.manager = this.manager.filter(item => item.id !== id);
}
detailProduct(product) {
  this.selectedProduct = product;
}
}
