import { Injectable } from '@angular/core';
import { HttpClient,
         HttpErrorResponse } from '@angular/common/http';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';
import {map,
        catchError,
        retry} from 'rxjs/operators';
import { Observable,
         throwError } from 'rxjs';

import * as Sentry from '@sentry/browser';

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
    return this.http.get<Product[]>(`${environment.url_api}/products`)
    .pipe(
      catchError(this.handleError),
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product)
    .pipe(
      catchError(this.handleError),
    );
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes)
    .pipe(
      catchError(this.handleError),
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  getRandomUsers(): Observable<User[]>{
    return this.http.get('https://randomuser.me/api/?results=2')
           .pipe(
             retry(3),
             catchError(this.handleError),
             map((response: any) => {
               return response.results as User[];
             })
           );
  }

  getFile(){
     return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    Sentry.captureException(error);
    return throwError('ups algo salió mal;')
  }
}
