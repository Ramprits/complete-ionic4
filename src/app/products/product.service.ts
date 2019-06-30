import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://pacific-reef-60955.herokuapp.com/products'
    );
  }

  getProduct(productId: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://pacific-reef-60955.herokuapp.com/products/${productId}`
    );
  }
}
