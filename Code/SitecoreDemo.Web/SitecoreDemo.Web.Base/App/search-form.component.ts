import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ContentSearchService } from './content-search.service';

@Component({
  selector: 'search-form',
  template: `
      <fieldset>
          <input [(ngModel)]="keyword" name="keyword" placeholder="keyword" type="search" />
          <button (click)="searchClick()" type="button">Search</button>
      </fieldset>
  `,
  providers: [ContentSearchService]
})
export class SearchFormComponent implements OnInit {
  @Input() keyword: string;
  @Output() search = new EventEmitter();
  performingSearch = false;
  searchResultsUrl: string;

  constructor(
    private contentSearchService: ContentSearchService) {
  }

  ngOnInit() {
    this.contentSearchService.searchResultsUrl().then(searchResultsUrl => this.searchResultsUrl = searchResultsUrl);
  }

  searchClick() {
    this.performingSearch = true;
    window.location.href = this.searchResultsUrl + '?q=' + encodeURIComponent(this.keyword);
  }
}
