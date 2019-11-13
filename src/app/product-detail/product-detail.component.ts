import { ProductsComponent } from './../products/products.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 @Input() data: ProductsComponent;
  constructor() { }

  ngOnInit() {
  }

}
