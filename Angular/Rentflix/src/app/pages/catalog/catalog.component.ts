import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  newReleases: any[];
  popular: any[];
  pagesarray = new Array();
  count = 0;
  max = 20;
  limit = 9;
  page = 0;

  constructor(private TMDBService: TMDBService,private Activatedroute: ActivatedRoute) {}
  sub;
  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      const page = params.get('page');
      this.page = +page;
    });
    this.TMDBService.discoverNewest();
    this.TMDBService.discoverPopular();
    this.numberOfPages();

  }

  /* Returns a list of four new releases to display
   * on the landing page of our site
   */
  public getNewReleases() {
    if (this.TMDBService.getNewest()) {
      this.newReleases = this.TMDBService.getNewest().slice(0, this.max);
    }
    // remove any results that have no poster
    if (this.newReleases) {
       return this.newReleases.filter(t => t.poster_path != null);
    }
  }

  /* Returns a list of four popular films to display
   * on the landing page of our site
   */
  public getPopular() {
    if (this.TMDBService.getPopular()) {
      this.popular = this.TMDBService.getPopular().slice(0, this.max);
    }
    // remove any results that have no poster
    if (this.popular) {return this.popular.filter(t => t.poster_path != null); }
  }

  /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    let year = date.substring(0, 4);
    console.log(year);
    if (year >= 2019) { return '$8.99'; }
    else if (year <= 2018 && year > 2015) { return '$5.99'; }
    return '$3.99';
  }
  public displayResults(page) {
    const results = this.limit * page;
    let temp = this.getPopular();
    console.log(temp);
    if (results > this.max - this.limit) {
      return temp.slice(results, this.max);
    }
    return temp.slice(results, this.limit + results);
  }
  private numberOfPages(){
    const page = Math.floor(this.max / this.limit);
    for(let i = 0; i < page; i ++){
      this.pagesarray.push(i + 1);
    }
  }
  public getPages(){
    return this.pagesarray;
  }
}
