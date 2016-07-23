import { Component, OnInit } from '@angular/core';
import { SearchObject } from './search-object';
import { TextPageResult } from './text-page-result';
import { ContentSearchService } from './content-search.service';

@Component({
  selector: 'search-results',
  template: `
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let textPage of textPages">
            <h3 class="list-group-item-heading">{{textPage.Title}}</h3>
            <div>
              {{textPage.Text}}
              <div>
                  <a target="_self" [href]="[textPage.Url]">{{textPage.Title}}</a>
              </div>
            </div>
        </li>
      </ul>
  `,
  providers: [ContentSearchService]
})
export class SearchResultsComponent implements OnInit {
  textPages: TextPageResult[];
  itemsTotal: number;
  pagesTotal: number;
  searchObject: SearchObject;
  lang: string;
  keyword: string;

  constructor(
    private contentSearchService: ContentSearchService) {
  }

  ngOnInit() {
    this.keyword = this.getQueryStringValue();
    if (this.keyword !== '' && this.keyword !== undefined) {
      this.contentSearchService.lang()
        .then(lang => {
          this.lang = lang;
          this.searchObject = new SearchObject();
          this.searchObject.lang = this.lang;
          this.searchObject.keyword = this.keyword;
          this.searchObject.page = 1;
          this.getSearchResults(this.searchObject);
        });
    }
  }

  getSearchResults(searchObject: SearchObject) {
    this.contentSearchService.textPages(searchObject)
      .then(searchResults => {
        this.textPages = searchResults.textPages;
        this.pagesTotal = searchResults.pagesTotal;
        this.itemsTotal = searchResults.itemsTotal;
      });
  }

  private getQueryStringValue() {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('q').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

}
