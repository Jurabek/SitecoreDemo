import { Component, OnInit } from 'angular2/core';
import { SearchObject } from './search-object';
import { TextPageResult } from './text-page-result';
import { ContentSearchService } from './content-search.service';
import { PaginationComponent } from './pagination.component';

@Component({
    selector: 'search-results',
    template: `
      <pagination (onPaged)="onPaged($event)" [currentPage]=currentPage [totalItems]=itemsTotal [itemsPerPage]=itemsPerPage></pagination>
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
      <pagination (onPaged)="onPaged($event)" [currentPage]=currentPage [totalItems]=itemsTotal [itemsPerPage]=itemsPerPage></pagination>
  `,
    providers: [ContentSearchService],
    directives: [PaginationComponent]
})
export class SearchResultsComponent implements OnInit {
    textPages: TextPageResult[];
    itemsTotal: number;
    pagesTotal: number;
    searchObject: SearchObject;
    lang: string;
    keyword: string;
    currentPage: number = 1;
    itemsPerPage: number = 12;

    constructor(
        private contentSearchService: ContentSearchService) {
    }

    ngOnInit() {
        this.search(1);
    }

    onPaged(page: number) {
        this.search(page);
    }

    search(page: number) {
        this.keyword = this.getKeyword();
        if (this.keyword !== '' && this.keyword !== undefined) {
            this.contentSearchService.lang()
                .then(lang => {
                    this.lang = lang;
                    this.searchObject = new SearchObject();
                    this.searchObject.lang = this.lang;
                    this.searchObject.keyword = this.keyword;
                    this.searchObject.page = page;
                    this.currentPage = page;
                    this.getSearchResults(this.searchObject);
                });
        }
    }

    private getSearchResults(searchObject: SearchObject) {
        this.contentSearchService.textPages(searchObject)
            .then(searchResults => {
                this.textPages = searchResults.textPages;
                this.pagesTotal = searchResults.pagesTotal;
                this.itemsTotal = searchResults.itemsTotal;
            });
    }

    private getKeyword() {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('q').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

}
