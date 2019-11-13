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
  deleteProduct(id){

    this.manager = this.manager.filter(item => item.id !== id);
}
}
