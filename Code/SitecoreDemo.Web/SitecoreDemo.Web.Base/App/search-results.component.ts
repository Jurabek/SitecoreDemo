import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result';
import { SearchObject } from './search-object';
import { ContentSearchService } from './content-search.service';

@Component({
  selector: 'search-results',
  template: `
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let textPage of textPages">
            <h3 class="list-group-item-heading">{{textPage.Title}}</h3>
            <div>
              {{textPage.Text}}
            </div>
            <div>
                <a target="_self" [href]="[textPage.Url]"></a>
            </div>
        </li>
    </ul>
  `
})

export class SearchResultsComponent implements OnInit {
  searchResults: any;
  textPages: SearchResult[];
  itemsTotal: number;
  pagesTotal: number;
  error: any;
  searchObject: SearchObject;

  constructor(
    private contentSearchService: ContentSearchService) {
  }

  ngOnInit() {
    this.searchObject = new SearchObject();
    this.searchObject.page = 1;
    this.searchObject.keyword = 'marketers';
    this.getSearchResults(this.searchObject);
    if (this.searchResults != null) {
      this.textPages = this.searchResults.textPages;
      this.itemsTotal = this.searchResults.itemsTotal;
      this.pagesTotal = this.searchResults.pagesTotal;
    }

  }

  getSearchResults(searchObject: SearchObject) {
    this.contentSearchService.textPages(searchObject)
      .then(searchResults => this.searchResults = searchResults);
  }
}
