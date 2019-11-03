import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private TMDBService: TMDBService) { }

  ngOnInit() {
  }


  search(title: string) {
    // alert(title)
    this.TMDBService.searchTitle(title);
  }

  public getSearchResults() {
    let results = this.TMDBService.getSearchResults()
    if (results) return results.filter(t => t.poster_path != null);
  }

  public isValidSearch = () => this.TMDBService.isValidSearch();


}


