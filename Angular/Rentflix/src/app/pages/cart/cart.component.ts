import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import {Observable} from 'rxjs';
import {CartService} from '../../services/cart-service/cart.service';
import {LoginService} from '../../services/login-service/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cart;
  private id = -1;
  private totalPrice = 0.00;
  ngOnInit(): void {
    this.getCart();
  }

  constructor(private cartService: CartService, private loginService: LoginService, private moviedb: TMDBService) {}
  /**
  * Gets cart from database
   *
  * */
  getCart() {
    this.cartService.getCart(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {results: any});
        this.cart = response.results;
        console.log("hey");
        this.convertCart();
      });
    });
  }

  /**
   * gets ids from array and then gets related movies
   *
   * */
  convertCart() {

  }

  getMovie(id) {
    //console.log(id);
    if (this.id !== id) {
      this.moviedb.getMovieFromID(id);

    }

    return this.moviedb.getMovie();
  }

  public getPrice(date) {
    const year = date.substring(0, 4);
    console.log(year);
    if (year >= 2019) { this.totalPrice += 8.99; return '$8.99'; } else if (year <= 2018 && year > 2015) {this.totalPrice += 5.99; return '$5.99'; }
    this.totalPrice += 3.99;
    return '$3.99';
  }
}
