import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TMDBService } from "../../services/tmdb-service/tmdb.service";


@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  private id;
  private activatedRoute;
  private movie;
  

  constructor(private Activatedroute: ActivatedRoute, private TMDBService: TMDBService) {}

  sub;

  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    this.TMDBService.getMovieFromID(this.id);
    
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

  getMovie() {
    return this.TMDBService.getMovie();
  }

}
