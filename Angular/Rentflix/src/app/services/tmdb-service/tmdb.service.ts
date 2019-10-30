import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  private apiKey = 'a3a2f627df576a24a77620f55e7d04e2';
  private apiDiscover = `https://api.themoviedb.org/3/discover/movie`;
  private apiGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}&language=en-US`;
  private apiDetails  = `https://api.themoviedb.org/3/movie`;
  private topRated;
  private popular;
  private movie;
  private genres;
  private reviews;
  private related;
  constructor(private http: HttpClient) {}

  public getTopRated = () => this.topRated;
  public getPopular = () => this.popular;
  public getMovie = () => this.movie;
  public getReviews = () => this.reviews;
  public getRelated = () => this.related;
  public getGenresList = () => this.genres;

  /* Gets the latest movies from TMDB
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
          console.log(responseBody);
          this.topRated = responseBody.results;
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
          console.log(responseBody);
          this.popular = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }

  public getMovieFromID(id) {
    this.http
    .get(
      `${this.apiDetails}/${id}?api_key=${this.apiKey}`,
      { responseType: 'text' }
    )
    .subscribe(
      response => {
        const responseBody = JSON.parse(response);
        console.log(responseBody);
        this.movie = responseBody;
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
          console.log(responseBody);
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
          console.log(responseBody);
          this.related = responseBody.results;
        },
        err => {
          console.log(err);
        }
      );
  }


  // public getGenres() {
  //   this.http.get(this.apiGenres, { responseType: 'text' })
  //   .subscribe(response => {
  //     const responseBody = JSON.parse(response);

  //     this.genres = responseBody.genres;
  //     }, err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // public discoverByGenre(id: number, sort_by = 'popularity.desc', displayLoading = true) {
  //   if(!id) {
  //     this.discover(sort_by, displayLoading)
  //     return;
  //   }

  //   this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&with_genres=${id}&language=en-US`, { responseType: 'text' })
  //     .subscribe(response => {
  //       const responseBody = JSON.parse(response);
  //       this.results = responseBody.results;
  //     }, err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
