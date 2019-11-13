import { ProductsComponent } from './../products/products.component';
import { DataProduct } from './../data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  manager = DataProduct;
  selectedProduct:ProductsComponent;
  deleteProduct(id){
    this.manager = this.manager.filter(item => item.id !== id);
}
detailProduct(product) {
  this.selectedProduct = product;
}
}
