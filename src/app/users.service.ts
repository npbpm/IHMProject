import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers= () => {
    return this.http.get<Array<user>>(this.apiUrl);
  };
}
