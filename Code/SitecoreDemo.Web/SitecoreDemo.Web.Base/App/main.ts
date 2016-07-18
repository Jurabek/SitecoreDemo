import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form.component';
import { SearchResultsComponent } from './search-results.component';
import { PaginationComponent } from './pagination.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
bootstrap(SearchFormComponent, [HTTP_PROVIDERS]);
bootstrap(SearchResultsComponent, [HTTP_PROVIDERS]);
bootstrap(PaginationComponent, [HTTP_PROVIDERS]);
