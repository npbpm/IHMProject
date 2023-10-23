//Service développé par Nicolás Pérez

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts = () => {
    return this.http.get<Array<product>>(this.apiUrl);
  };
}
