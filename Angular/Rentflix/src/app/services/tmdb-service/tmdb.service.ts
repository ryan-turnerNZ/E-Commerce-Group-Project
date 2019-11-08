import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Movie {
  id: any;
  title: any;
  releaseDate: any;
  posterPath: any;
  genres: any
}
export interface Movie2 {
  id: any;
  title: any;
  releaseDate: any;
  posterPath: any;
  timeAdded: any;
  averageVote: any;
  homePage: any;
}
@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  private apiKey = 'a3a2f627df576a24a77620f55e7d04e2';
  private apiDiscover = `https://api.themoviedb.org/3/discover/movie`;
  private apiGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}&language=en-US`;
  private apiDetails  = `https://api.themoviedb.org/3/movie`;
  private apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;
  private customMovieArray: Movie[];
  private customMovieArray2: Movie2[];
  private totalCartCost = 0.00;
  private newest;
  private topRated;
  private popular;
  private movie;
  private genres;
  private reviews;
  private related;
  private recommended;
  private results;
  private searchResults;

  private validSearch: boolean;
  private notFound: boolean;
  private notProvided: boolean;

  constructor(private http: HttpClient) {}

  public getNewest = () => this.newest;
  public getTopRated = () => this.topRated;
  public getPopular = () => this.popular;
  public getMovie = () => this.movie;
  public getMovieArray = () => this.customMovieArray;
  public getMovieArray2 = () => this.customMovieArray2;
  public getTotalCartCost = () => this.totalCartCost;
  public resetTotalCartCost = () => this.totalCartCost = 0.00;
  public getReviews = () => this.reviews;
  public getRelated = () => this.related;
  public getResults = () => this.results;
  public getRecommended = () => this.recommended;
  public getSearchResults = () => this.searchResults;
  public getGenresList = () => this.genres;
  public isValidSearch = () => this.validSearch;


  /* Gets the latest movies from TMDB
  to display on the landing page */
  public discoverNewest(sort_by = 'date.asc') {
    this.http
      .get(
        `${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.newest = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  /* Gets the most popular movies from TMDB
  to display on the landing page */
  public discoverPopular(sort_by = 'popularity.desc') {
    this.http
      .get(
        `${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.popular = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  /* Gets the top rated movies from TMDB
  to display on the landing page */
  public discoverTopRated() {
    this.http
      .get(
        `${this.apiDetails}/top_rated?api_key=${this.apiKey}`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.topRated = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  async getMovieFromID(id) {
    this.http
    .get(
      `${this.apiDetails}/${id}?api_key=${this.apiKey}`,
      { responseType: 'text' }
    )
    .subscribe(
      response => {
        const responseBody = JSON.parse(response);
        // console.log(responseBody);
        this.movie = responseBody;
        console.log(this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }

public clearMovieArray() {
    this.customMovieArray = [];
    this.customMovieArray2 = [];
}
  async getMovieFromID2(id) {
    function updateCost(data: any) {
      const year = data.substring(0, 4);
      console.log(year);
      if (year >= 2019) { return 8.99; } else if (year <= 2018 && year > 2015) { return 5.99; }
      return 3.99;
    }
    this.http
      .get(
        `${this.apiDetails}/${id}?api_key=${this.apiKey}`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
           // console.log(responseBody);
          this.customMovieArray.push({id: responseBody.id, title: responseBody.title, releaseDate: responseBody.release_date, posterPath: responseBody.poster_path, genres: responseBody.genres});
          this.totalCartCost += updateCost(responseBody.release_date);
        },
        err => {
          console.log(err);
        }
      );
  }
  async getMovieFromID3(objs) {
    this.http.get(`${this.apiDetails}/${objs.item_id}?api_key=${this.apiKey}`,
        { responseType: 'text' }
      ).subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.customMovieArray2.push({id: objs.item_id, title: responseBody.title, releaseDate: responseBody.release_date,
            posterPath: responseBody.poster_path, timeAdded: objs.purchase_date, averageVote: responseBody.vote_average, homePage: responseBody.homepage});
          // this.totalCartCost += updateCost1(responseBody.release_date);
        },
        err => {
          console.log(err);
        }
      );
  }
  public getMovieReviews(id) {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.reviews = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  public getRelatedMovies(id) {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`,
        { responseType: 'text' }
      )
      .subscribe(
        response => {
          const responseBody = JSON.parse(response);
          // console.log(responseBody);
          this.related = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  public getGenres() {
    this.http.get(this.apiGenres, { responseType: 'text' })
    .subscribe(response => {
      const responseBody = JSON.parse(response);
      // console.log(this.genres)
      this.genres = responseBody.genres;
      }, err => {
        console.log(err);
      }
    );
  }

  public discoverByGenre(id: number) {
    this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=popularity.desc&with_genres=${id}&language=en-US`, { responseType: 'text' })
      .subscribe(response => {
        const responseBody = JSON.parse(response);
        console.log(responseBody.results);
        this.results = responseBody.results;
        this.recommended = responseBody.results;
      }, err => {
        console.log(err);
      }
    );
    console.log(this.results);
  }

  public discoverByGenre2(id: number) {
    this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=popularity.desc&with_genres=${id}&language=en-US`, { responseType: 'text' })
      .subscribe(response => {
        const responseBody = JSON.parse(response);
        console.log(responseBody.results);
       this.recommended = responseBody.results;
       console.log(this.recommended);
      }, err => {
        console.log(err);
      }
    );
  }


  public discover(sort_by = 'popularity.desc') {
    this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
      .subscribe(response => {
        const responseBody = JSON.parse(response);
        this.results = responseBody.results;
        console.log(responseBody.results)

      }, err => {
        console.log(err);
      }
    );
  }


  public searchTitle(title: string): void {
    if (!title) {
      this.validSearch = false;
      this.notProvided = true;
      this.notFound = false;
    } else {
      this.getValidSearchResults(title);
    }
  }

  public getValidSearchResults(title: string) {
    this.http.get(`${this.apiSearch}&language=en-US&query=${title}`, { responseType: 'text' })
      .subscribe(response => {
        const responseBody = JSON.parse(response);

        if (responseBody.Error) {
          this.validSearch = false;
          this.notFound = true;
          this.notProvided = false;
        } else {
          this.validSearch = true;
          this.notFound = false;
          this.notProvided = false;

          this.searchResults = responseBody.results;
          console.log(this.searchResults);
        }
      });
  }



}
