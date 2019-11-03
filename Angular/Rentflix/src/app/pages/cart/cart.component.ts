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
  cart = [];
  ngOnInit(): void {
    this.getCart();
  }
  constructor(private cartService: CartService, private loginService: LoginService) {}
  getCart() {
    this.cartService.getCart(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {results: any});
        console.log(response.results);
      });
    });
  }
}
