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

  //Méthode appelée lorsqu'on souhaite recueillir les donées de la BDD
  getProducts = () => {
    return this.http.get<Array<product>>(this.apiUrl);
  };
}
