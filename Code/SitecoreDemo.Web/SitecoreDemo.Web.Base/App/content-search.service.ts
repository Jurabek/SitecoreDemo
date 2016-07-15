import { ElementRef, Injectable } from '@angular/core';
import { SearchResult } from './search-result';
import { SearchObject } from './search-object';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ContentSearchService {
  private actionUrl = '/textdata-result/GetTextPages';

  constructor(
    private elementRef: ElementRef, private http: Http) {
  }

  lang() {
    return this.elementRef.nativeElement.getAttribute('data-current-language');
  }

  searchResultsUrl() {
    return this.elementRef.nativeElement.getAttribute('data-search-results-item-url');
  }

  textPages(searchObject: SearchObject): Promise<SearchResult[]> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.actionUrl, JSON.stringify(searchObject), { headers: headers })
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
