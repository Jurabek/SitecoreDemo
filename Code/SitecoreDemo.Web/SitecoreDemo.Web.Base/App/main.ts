import { XHRBackend } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { SearchFormComponent } from './search-form.component';

bootstrap(SearchFormComponent, [HTTP_PROVIDERS]);
