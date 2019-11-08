import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation-service/recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  private recommended = [];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit() {
    this.getRecommendedMovies()
  }

  public getRecommended = () => this.recommended;

  /* Returns a list of four new releases to display
   * on the landing page of our site
   */
  public getRecommendedMovies() {
    if (this.recommendationService.getRecommendedMovies()) {
      this.recommended = this.recommendationService.getRecommendedMovies().slice(0, 4);
    }
    // remove any results that have no poster
    if (this.recommended) {
      return this.recommended.filter(t => t.poster_path != null);
    }
  }
  
 /* Determines an arbitrary price for a given movie,
   * based on the release date of said movie
   */
  public getPrice(date) {
    const year = date.substring(0, 4);
    if (year >= 2019) {
      return '$8.99';
    } else if (year <= 2018 && year > 2015) {
      return '$5.99';
    }
    return '$3.99';
  }
  

}
