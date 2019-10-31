import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Movie } from './move';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
   orderItems: Movie[];
  constructor(private http: HttpClient) {
    this.orderItems = [];
  }
  addItemToOrder(movie: Movie) {
    this.orderItems.push(movie);
  }
  getCart(): Observable<Movie[]> {
    return of(this.orderItems);
  }
  removeItemFromOrder(item) {
    const index = this.orderItems.indexOf(item, 0);
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
  }
}
