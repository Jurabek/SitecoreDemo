import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from 'angular2/core';
import { TextPageResult } from './text-page-result';
import { IPaginationComponent } from './IPaginationComponent';

@Component({
    selector: 'pagination',
    template: `
  <div class="text-md-center">
      <nav>
          <ul class="pagination">
              <li class="page-item" *ngIf="currentPage > 1">
                  <a class="page-link" [href]="" aria-label="First" (click)="changePage(1, $event)">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">First</span>
                  </a>
              </li>
              <li class="page-item" *ngIf="currentPage > 2">
                  <a class="page-link" [href]="" aria-label="Previous" (click)="changePage(currentPage-1, $event)">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                  </a>
              </li>
              <li [class.active]="page === currentPage" *ngFor="let page of pages" class="page-item"><a class="page-link" [href]="" (click)="changePage(page, $event)">{{page}}</a></li>
              <li class="page-item" *ngIf="currentPage < (pageCount - 2)">
                  <a class="page-link" [href]="" aria-label="Next" (click)="changePage(currentPage+1, $event)">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                  </a>
              </li>
              <li class="page-item" *ngIf="currentPage < pageCount">
                  <a class="page-link" [href]="" aria-label="Last" (click)="changePage(pageCount, $event)">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Last</span>
                  </a>
              </li>
          </ul>
      </nav>
  </div>
  `,
    inputs: ['currentPage', 'totalItems', 'itemsPerPage'],
    outputs: ['onPaged']
})
export class PaginationComponent implements OnChanges, IPaginationComponent {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    pageCount: number;
    pages: number[] = [];
    isActive: boolean;
    onPaged = new EventEmitter<number>();

    // Respond after Angular sets a data-bound input property.
    ngOnChanges() {
        this.pages = [];
        this.pageCount = this.totalItems % this.itemsPerPage !== 0 ? Math.floor(this.totalItems / this.itemsPerPage) + 1 : Math.floor(this.totalItems / this.itemsPerPage);
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page: number, event: any) {
        event.stopPropagation();
        this.onPaged.emit(page);
    }

}
