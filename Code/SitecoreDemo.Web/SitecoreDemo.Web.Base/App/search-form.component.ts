import { Component, Input, OnInit } from '@angular/core'
import { SearchObject } from './search-object';
import { TextPageResult } from './text-page-result';
import { SearchResult } from './search-result';
import { ContentSearchService } from './content-search.service';
import { PaginationComponent } from './pagination.component';

@Component({
  selector: 'search-form',
  template: `
      <div>
        <fieldset>
            <input [(ngModel)]="keyword" name="keyword" placeholder="keyword" type="search" />
            <button (click)="searchClick()" type="button">Search</button>
        </fieldset>
      </div>
      <pagination *ngIf="textPages"></pagination>
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
      <pagination *ngIf="textPages"></pagination>
  `,
  providers: [ContentSearchService],
  directives: [PaginationComponent]
})
export class SearchFormComponent implements OnInit {
  textPages: TextPageResult[];
  itemsTotal: number;
  pagesTotal: number;
  error: any;
  searchObject: SearchObject;

  constructor(
    private contentSearchService: ContentSearchService) {
  }

  ngOnInit() {
    this.contentSearchService.lang().then(lang => this.lang = lang);
  }

  @Input() keyword: string;
  lang: string;
  searchResultsUrl: string;
  searchClick() {
    this.searchObject = new SearchObject();
    this.searchObject.lang = this.lang;
    this.searchObject.keyword = this.keyword;
    this.searchObject.page = 1;

    this.getSearchResults(this.searchObject);
  }

  getSearchResults(searchObject: SearchObject) {
    this.contentSearchService.textPages(searchObject)
      .then(searchResults => {
        this.textPages = searchResults.textPages;
        this.pagesTotal = searchResults.pagesTotal;
        this.itemsTotal = searchResults.itemsTotal;
      });
  }
}
