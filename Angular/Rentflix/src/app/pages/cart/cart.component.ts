import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../../services/crud-service/crud-service.service';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import {Movie} from '../../services/crud-service/move';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cart: Movie[] = [];
  constructor(private crud: CrudServiceService) { }

  ngOnInit() {
    this.crud.getCart().subscribe(movie => this.cart = movie);
    console.log(this.cart);
  }

}
