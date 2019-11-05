import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../../services/tmdb-service/tmdb.service';
import { Router, ActivatedRoute } from '@angular/router';
import {OrdersService} from '../../../services/orders-service/orders.service';
import {LoginService} from '../../../services/login-service/login.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  private orders = [];


  constructor(private moviedb: TMDBService, private orderService: OrdersService, private loginService: LoginService) {}
  ngOnInit() {
    this.moviedb.clearMovieArray();
    this.getOrders();
  }

  private getOrders() {
    this.orderService.getOrders(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {valid: boolean, message: any});
        this.orders = response.message;
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
  /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    const year = date.substring(0, 4);
    console.log(year);
    if (year >= 2019) { return '$8.99'; } else if (year <= 2018 && year > 2015) { return '$5.99'; }
    return '$3.99';
  }
  public displayResults() {
      return this.moviedb.getMovieArray2();
  }



}
