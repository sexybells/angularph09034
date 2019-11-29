import { ProductService } from './../Service/product.service';
import { ProductType } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: ProductType = new ProductType();
  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.ProductService.addProduct(this.product).subscribe(data => {
      console.log(data);
    })
  }

}
