import { ElementRef, Injectable } from '@angular/core';
import { TextPageResult } from './text-page-result';
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

  lang(): Promise<string> {
    return this.http.get('/textdata-result/GetCurrentLanguage')
      .toPromise()
      .then(response => response.json().currentLanguage)
      .catch(this.handleError);
  }

  searchResultsUrl() {
  }

  textPages(searchObject: SearchObject) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.actionUrl, JSON.stringify(searchObject), { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
