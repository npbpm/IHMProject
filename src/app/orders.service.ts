import { Injectable } from '@angular/core';
import { Orders } from './interfaces/Orders';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl: string = 'assets/Orders.json';

  constructor(private http: HttpClient) {}

  getOrders= () => {
    return this.http.get<Array<Orders>>(this.apiUrl);
  };
}
