import { Injectable } from "@angular/core";
import { TMDBService } from 'src/app/services/tmdb-service/tmdb.service';


@Injectable({
  providedIn: "root"
})
export class RecommendationService {
  private cart = [];
  private genres = [];
  private mostPopularGenre: number;
  private recommended = [];

  constructor(private TMDBService: TMDBService) {}

  public getRecommended = () => this.recommended;

  storeCart(currentCart) {
    this.genres = [];
    this.cart = currentCart;
    this.addGenres();
  }

  addGenres() {
    for (let movie of this.cart) {
      for (let genre of movie.genres) {
        this.genres.push(genre.id);
      }
    }
    console.log(this.genres);
    this.getMostPopularGenre();
  }

  getMostPopularGenre() {
    var maxOccurance = -1;
    var m = 0;
    var item;
    for (var i = 0; i < this.genres.length; i++) {
      for (var j = i; j < this.genres.length; j++) {
        if (this.genres[i] == this.genres[j]) m++;
        if (maxOccurance < m) {
          maxOccurance = m;
          item = this.genres[i];
        }
      }
      m = 0;
    }
    // this.mostPopularGenre = item;
    
    this.getRecommendedFromService(item);
  }

  getRecommendedFromService(id: number) {
    console.log(id);
    this.TMDBService.discoverByGenre2(id);

  }

  getRecommendedMovies () {
    return this.TMDBService.getRecommended();
  }

  

  
}
