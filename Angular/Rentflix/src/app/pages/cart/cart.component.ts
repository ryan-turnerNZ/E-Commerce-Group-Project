import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import {Observable} from 'rxjs';
import {CartService} from '../../services/cart-service/cart.service';
import {LoginService} from '../../services/login-service/login.service';
import {OrdersService} from '../../services/orders-service/orders.service';
import {Router} from '@angular/router';
import { RecommendationService } from '../../services/recommendation-service/recommendation.service';

export interface Movie {
  title: any;
  releaseDate: any;
  posterPath: any;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cart = [];
  private totalPrice = 0.00;

  ngOnInit(): void {
    this.moviedb.clearMovieArray();
    this.cart = [];
    this.totalPrice = 0.00;
    this.moviedb.resetTotalCartCost();
    this.getCart();
  }

  constructor(private cartService: CartService, 
    private loginService: LoginService, 
    private moviedb: TMDBService, 
    private ordersService: OrdersService, 
    private router: Router, 
    private recommendation: RecommendationService) {}

  getCart() {
    this.totalPrice = 0.00;
    this.cartService.getCart(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {valid: boolean, message: any});
        this.cart = response.message;
        console.log(this.cart);
        this.convertCart();
      });
    });
  }

   convertCart() {
    this.moviedb.clearMovieArray();
    this.cart.forEach(async  m => {
      await this.moviedb.getMovieFromID2(m.item_id);
    });
  }
  getArray() {
    return this.moviedb.getMovieArray();
  }
  getTotalCost() {
    return this.moviedb.getTotalCartCost();
  }
  public getPrice(date) {
    const year = date.substring(0, 4);
    if (year >= 2019) { return '$8.99'; } else if (year <= 2018 && year > 2015) { return '$5.99'; }
    return '$3.99';
  }

  addToOrder() {
    // console.log(this.loginService.getUserToken());
    this.ordersService.orderCart(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {valid: boolean, message: any});
        // console.log(response.message);
        if (response.valid === true) {
          this.router.navigate(['/recommended']);
        }
      });
    });
    // forward cart to recommendation service
  this.recommendation.storeCart(this.getArray());
  }

  removeFromCart(id) {
    this.cartService.removeFromCartItem(this.loginService.getUserToken(), id).then(res => {
      res.subscribe(data => {
        const response = data as {message, status};
        console.log(response.message + response.status);
        this.ngOnInit();
      });
    });
  }
}
