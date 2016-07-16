import { Component } from '@angular/core';
import { SearchFormComponent } from './search-form.component';
import { ContentSearchService } from './content-search.service';

@Component({
    selector: 'app',
    template: `
      <search-form></search-form>
    `,
    directives: [SearchFormComponent],
    providers: [ContentSearchService]

})
export class AppComponent { }
