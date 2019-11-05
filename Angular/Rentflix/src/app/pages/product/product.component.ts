import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import {LoginService} from '../../services/login-service/login.service';
import {CartService} from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private id;
  private price;
  private activatedRoute;
  private movie;
  reviews: any[];
  related: any[];



  // tslint:disable-next-line:max-line-length
  constructor(private cartService: CartService, private router: Router, private Activatedroute: ActivatedRoute, private TMDBService: TMDBService, private loginService: LoginService) {}

  sub;

  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.TMDBService.getMovieFromID(this.id);
    this.TMDBService.getMovieReviews(this.id);
    this.TMDBService.getRelatedMovies(this.id);
  }


  OnDestroy() {
    this.sub.unsubscribe();
  }

  getMovie() {
    return this.TMDBService.getMovie();
  }

  getReview() {
    if (this.TMDBService.getReviews()) {
      this.reviews = this.TMDBService.getReviews().slice(0, 3);
    }
    if (this.reviews) { return this.reviews; }

 }

   /* Returns a list of four popular films to display
   * on the landing page of our site
   */
  getRelated() {
    if (this.TMDBService.getRelated()) {
      this.related = this.TMDBService.getRelated().slice(0, 4);
    }
    // remove any results that have no poster
    if (this.related) { return this.related.filter(t => t.poster_path != null); }
  }

   /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    const year = date.substring(0, 4);
    // console.log(year);
    if (year >= 2019) { this.price = 8.99; return '$8.99'; } else if (year <= 2018 && year > 2015) {  this.price = 5.99; return '$5.99'; }
    this.price = 3.99;
    return '$3.99';
  }

  additemToCart() {
    if (this.loginService.isAuthenticated()) {
      this.cartService.addToCartItem(this.loginService.getUserToken(), this.getMovie().id).then(som => {
        som.subscribe(data => {
          const response = (data as {message: any, valid: any});
          console.log('hi');
          console.log(response.message);
          console.log('end');
        });

      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
