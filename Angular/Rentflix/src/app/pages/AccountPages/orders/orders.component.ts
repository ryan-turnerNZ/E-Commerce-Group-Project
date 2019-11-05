import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login-service/login.service';
import {OrdersService} from '../../../services/orders-service/orders.service';
import {TMDBService} from '../../../services/tmdb-service/tmdb.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private loginService: LoginService, private orderService: OrdersService, private moviedb: TMDBService) { }
  private orders = [];
  mapOrders;
  ngOnInit() {
    this.moviedb.clearMovieArray();
    this.getOrders();
  }

  private getOrders() {
    this.orderService.getOrders(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {results: any});
        this.orders = response.results;
        this.convertCart();
      });
    });
  }
  convertCart() {
    this.moviedb.clearMovieArray();
    this.orders.forEach(async val => {
      await this.moviedb.getMovieFromID3(val);
    });

  }

  getArray() {
    const temp = this.moviedb.getMovieArray2();
    this.mapOrders = this.groupBy(temp, time => time.timeAdded);
    return this.mapOrders;
  }
  getTotalCost() {
    return this.moviedb.getTotalCartCost();
  }
  public getPrice(date) {
    const year = date.substring(0, 4);
    console.log(year);
    if (year >= 2019) { return '$8.99'; } else if (year <= 2018 && year > 2015) { return '$5.99'; }
    return '$3.99';
  }
   groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
