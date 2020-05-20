import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';
import {map,
        catchError} from 'rxjs/operators';
import { Observable,
         throwError } from 'rxjs';

interface User{
  email: string;
  gender: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  getRandomUsers(): Observable<User[]>{
    return this.http.get('https://randofdfdfdmuser.me/api/?results=2')
           .pipe(
             catchError(error => {
               return throwError('ups algo salió mal');
             }),
             map((response: any) => {
               return response.results as User[];
             })
           );
  }
}
