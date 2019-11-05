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

export class OrdersService {

  private serverlink = 'http://rent-flix-api.herokuapp.com';


  constructor(private http: HttpClient) {

  }

  async getOrders(token: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.get(`${this.serverlink}/orders`, httpOptions);
  }

  async orderCart(token: string) {
    console.log("token: " + token);
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
<<<<<<< HEAD
    return this.http.post(`${this.serverlink}/orders`, httpOptions);
=======
    console.log(httpOptions.headers.get('X-Requested-With'));
    return this.http.post(`${this.serverlink}/orders`,{}, httpOptions);
>>>>>>> a4ef7406e14070b857cd0d94a7cf970d4dcd9f88
  }
}
