import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  private apiKey = 'a3a2f627df576a24a77620f55e7d04e2';
  private apiDiscover = `https://api.themoviedb.org/3/discover/movie`
  private apiGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}&language=en-US`
  private newest;
  private popular;
  private genres;

 
  constructor(private http: HttpClient) { }

  public getNewest = () => this.newest;
  public getPopular = () => this.popular;
  public getGenresList = () => this.genres;


      //NEWEST
      public discoverNewest(sort_by = 'date.asc') {
        this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
          .subscribe(response => {
            const responseBody = JSON.parse(response);
            console.log(responseBody);
            this.newest = responseBody.results;
          }, err => {
            console.log(err);
          }
        );
      }
      
    //POPULAR
    public discoverPopular(sort_by = 'popularity.desc') {
      this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
        .subscribe(response => {
          const responseBody = JSON.parse(response);
          console.log(responseBody);
          this.popular = responseBody.results;
        }, err => {
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








