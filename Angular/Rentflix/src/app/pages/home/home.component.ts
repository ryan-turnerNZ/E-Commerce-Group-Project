import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import {LoginService} from '../../services/login-service/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topRated: any[];
  popular: any[];

  constructor(private TMDBService: TMDBService, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.TMDBService.discoverTopRated();
    this.TMDBService.discoverPopular();
  }

  /* Returns a list of four new releases to display
   * on the landing page of our site
   */
  public getTopRated() {
    if (this.TMDBService.getTopRated()) {
      this.topRated = this.TMDBService.getTopRated().slice(0, 4);
    }
    // remove any results that have no poster
    if (this.topRated) {
      return this.topRated.filter(t => t.poster_path != null);
    }
  }

  /* Returns a list of four popular films to display
   * on the landing page of our site
   */
  public getPopular() {
    if (this.TMDBService.getPopular()) {
      this.popular = this.TMDBService.getPopular().slice(0, 4);
    }
    // remove any results that have no poster
    if (this.popular) { return this.popular.filter(t => t.poster_path != null); }
  }

  /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    let year = date.substring(0, 4);
    // console.log(year);
    if (year >= 2019) { return '$8.99'; }
    else if (year <= 2018 && year > 2015) { return '$5.99'; }
    return '$3.99';
  }

}
