import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: any[];

  constructor(private TMDBService: TMDBService,) { }

  ngOnInit() {
    this.TMDBService.discoverNewest();
    this.TMDBService.discoverPopular();
  }

  public getNewReleases() {
    if(this.TMDBService.getNewest()) {
      this.newReleases = this.TMDBService.getNewest().slice(0,4)
    }

    // remove any results that have no poster
    if (this.newReleases) return this.newReleases.filter(t => t.poster_path != null);
  }

}
