import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'http://localhost/api';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/products`);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.api}/products/store`, product);
  }

}
