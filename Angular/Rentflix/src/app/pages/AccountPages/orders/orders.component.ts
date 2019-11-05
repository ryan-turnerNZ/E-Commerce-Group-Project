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
  ngOnInit() {
    this.moviedb.clearMovieArray();
    this.getOrders();
  }

  private getOrders() {
    this.orderService.getOrders(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {results: any});
        this.orders = response.results;
        console.log(this.orders);
        const d = new Date(this.orders[0].purchase_date);
        console.log(d.getUTCDate());
      });
    });
  }
  convertCart() {
    this.moviedb.clearMovieArray();
    this.orders.forEach(async  o => {
      await this.moviedb.getMovieFromID2(o.purchase_id);
    });
  }
  getArray() {
    return this.moviedb.getMovieArray();
  }
  getTotalCost() {
    return this.moviedb.getTotalCartCost();
  }
}
