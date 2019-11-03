import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb-service/tmdb.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private validSearch;



  constructor(private TMDBService: TMDBService) { }

  ngOnInit() {
    this.validSearch = false;
  }


  search(title: string) {
    // alert(title)
    this.TMDBService.searchTitle(title);
    this.validSearch = this.TMDBService.isValidSearch();
  }

  public getSearchResults() {
    let results = this.TMDBService.getSearchResults()
    if (results) return results.filter(t => t.poster_path != null);
  }

  public isValidSearch = () => this.validSearch;


}


