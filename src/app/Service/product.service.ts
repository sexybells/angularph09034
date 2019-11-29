import { HttpClient } from '@angular/common/http';
import { DataProduct } from './../data';
import { Injectable } from '@angular/core';
import { ProductType } from './../product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = 'http://5dd23ac815bbc2001448d7c8.mockapi.io/api/v1/products';
  constructor(
    private http:HttpClient
  ) { }
  getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${this.products}`)
  }
  getProduct(id): Observable<ProductType>{
    return this.http.get<ProductType>(`${this.products}/${id}`);
  }
  deleteProduct(id): Observable<ProductType>{
    return this.http.delete<ProductType>(`${this.products}/${id}`);
  }
  addProduct(product): Observable<ProductType>{
    return this.http.post<ProductType>(`${this.products}`, product);
  }

}
