import { ElementRef, Injectable } from 'angular2/core';
import { SearchObject } from './search-object';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from 'angular2/http';

@Injectable()
export class ContentSearchService {

  constructor(
    private elementRef: ElementRef, private http: Http) {
  }

  lang(): Promise<string> {
    return this.http.get('/textdata-result/getcurrentlanguage')
      .toPromise()
      .then(response => response.json().currentLanguage)
      .catch(this.handleError);
  }

  searchResultsUrl(): Promise<string> {
    return this.http.get('/textdata-result/getsearchresultsurl')
      .toPromise()
      .then(response => response.json().searchResultsItemUrl)
      .catch(this.handleError);
  }

  textPages(searchObject: SearchObject) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post('/textdata-result/gettextpages', JSON.stringify(searchObject), { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
