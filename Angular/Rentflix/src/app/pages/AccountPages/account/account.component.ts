import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart-service/cart.service';
import {LoginService} from '../../../services/login-service/login.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private account = [];
  constructor(private cartService: CartService, private loginService: LoginService) { }

  ngOnInit() {
    this.getAccountDetails();
  }

  getAccountDetails() {
    this.cartService.getAccountDetails(this.loginService.getUserToken()).then(res => {
      res.subscribe(data => {
        const response = (data as {results: any});
        this.account = response.results;
        console.log(this.account);
      });
    });
  }

}
