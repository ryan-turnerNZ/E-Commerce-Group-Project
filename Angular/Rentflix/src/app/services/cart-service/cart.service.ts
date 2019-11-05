import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Requested-With': '',
  })
};

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private serverlink = 'http://rent-flix-api.herokuapp.com';


  constructor(private http: HttpClient) {

  }

  async getCart(token: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.get(`${this.serverlink}/cart`, httpOptions);
  }

  async getAccountDetails(token: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.get(`${this.serverlink}/user/details`, httpOptions);
  }
  async addToCartItem(token: string, itemId: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.post(`${this.serverlink}/cart`, {item_id: itemId}, httpOptions);
  }

  async removeFromCartItem(token: string, itemId: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.delete(`${this.serverlink}/cart/${itemId}`, httpOptions);
  }

}
