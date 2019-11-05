import { Component, OnInit } from "@angular/core";
import { TMDBService } from "../../services/tmdb-service/tmdb.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"]
})
export class CatalogComponent implements OnInit {
  newReleases: any[];
  popular: any[];
  moviesWithGenre: any[];
  results;
  pagesarray = new Array();
  genres;
  count = 0;
  max = 20;
  limit = 9;
  page = 0;
  maxpage = 0;
  sort_by = "popularity.desc";

  constructor(
    private TMDBService: TMDBService,
    private Activatedroute: ActivatedRoute
  ) {}
  sub;
  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      const page = params.get("page");
      this.page = +page;
    });
    this.TMDBService.discoverNewest();
    this.TMDBService.discoverPopular();
    this.TMDBService.getGenres();
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
    if (this.popular) {
      return this.popular.filter(t => t.poster_path != null);
    }
  }

  public getWithGenre(id) {
    if(id) {
      this.TMDBService.discoverByGenre(id, this.sort_by);
      this.moviesWithGenre = this.TMDBService.getResults().slice(0, this.max);
    }
      // remove any results that have no poster
      if (this.moviesWithGenre) {
        return this.moviesWithGenre.filter(t => t.poster_path != null);
      }
      
   
  }

  /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    let year = date.substring(0, 4);
    if (year >= 2019) {
      return "$8.99";
    } else if (year <= 2018 && year > 2015) {
      return "$5.99";
    }
    return "$3.99";
  }
  
  public displayResults(page) {
    const results = this.limit * page;
    let value = (<HTMLSelectElement>document.getElementById("genres")).value;
    console.log(value);
    if (value == "any") {
      this.results  = this.getPopular();
    }

    else {
       this.results = this.getWithGenre(value);
    }
    
      if (results > this.max - this.limit) {
        return  this.results.slice(results, this.max);
      }
      return  this.results.slice(results, this.limit + results);




    
  }

  private numberOfPages() {
    const page = Math.floor(this.max / this.limit);
    for (let i = 0; i < page; i++) {
      this.pagesarray.push(i + 1);
    }
    this.maxpage = this.pagesarray[this.pagesarray.length - 1];
  }
  public getPages() {
    return this.pagesarray;
  }

  // public getWithGenre(id) {
  //   this.content.scrollToTop(200);
  //   this.currentGenre = id;
  //   if(id) {
  //     this.discover.discoverByGenre(id, this.sort_by)
  //   }
  //   else {
  //     this.discover.discover(this.sort_by)
  //   }
  //   this.showGenres = false;
  //   this.scrollerClass = "scroll";
  // }

  // public getResults() {
  //   this.results = this.discover.getResults()
  //   if (this.results) return this.results.filter(t => t.poster_path != null);
  // }

  public getGenresList() {
    this.genres = this.TMDBService.getGenresList();
    if (this.genres) {
      return this.genres;
    }
  }
}
