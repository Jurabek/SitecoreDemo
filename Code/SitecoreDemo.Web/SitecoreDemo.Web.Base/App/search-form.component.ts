import { Component, Input, OnInit } from '@angular/core';
import { ContentSearchService } from './content-search.service';

@Component({
  selector: 'search-form',
  template: `
    <div>
      <fieldset>
          <input [(ngModel)]="keyword" name="keyword" placeholder="keyword" type="search" />
          <button (click)="searchClick()" type="button">Search</button>
      </fieldset>
      </div>
  `,
  providers: [ContentSearchService]
})

export class SearchFormComponent implements OnInit {

  constructor(
    private contentSearchService: ContentSearchService) {
  }

  ngOnInit() {
    this.lang = this.contentSearchService.lang();
    this.searchResultsUrl = this.contentSearchService.searchResultsUrl();
  }

  @Input() keyword: string;
  lang: string;
  searchResultsUrl: string;
  searchClick() {
    window.location.href = this.searchResultsUrl + '?q=' + encodeURIComponent(this.keyword);
  }
}
