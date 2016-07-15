import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ContentSearchService {
  constructor(
    private elementRef: ElementRef) {
  }

  lang() {
    return this.elementRef.nativeElement.getAttribute('data-current-language');
  }

  searchResultsUrl() {
    return this.elementRef.nativeElement.getAttribute('data-search-results-item-url');
  }
}
