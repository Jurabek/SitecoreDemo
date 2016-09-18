﻿import { bootstrap }    from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

// import { AppComponent } from './App/app.component';
import { SearchFormComponent } from './ContentSearch/search-form.component';
import { SearchResultsComponent } from './ContentSearch/search-results.component';
// import { PaginationComponent } from './ContentSearch/pagination.component';

// bootstrap(AppComponent, [HTTP_PROVIDERS]);
bootstrap(SearchFormComponent,
    [
        HTTP_PROVIDERS
    ]);
bootstrap(SearchResultsComponent, [HTTP_PROVIDERS]);
// bootstrap(PaginationComponent, [HTTP_PROVIDERS]);
