import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private id;
  private activatedRoute;
  private movie;
  reviews: any[];

  constructor(private Activatedroute: ActivatedRoute, private TMDBService: TMDBService) {}

  sub;

  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.TMDBService.getMovieFromID(this.id);
    this.TMDBService.getMovieReviews(this.id);

  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

  getMovie() {
    return this.TMDBService.getMovie();
  }

  getReview() {
    if (this.TMDBService.getReviews()) {
      this.reviews = this.TMDBService.getReviews().slice(0,3);
    }
    if (this.reviews) return this.reviews;

  }

}
