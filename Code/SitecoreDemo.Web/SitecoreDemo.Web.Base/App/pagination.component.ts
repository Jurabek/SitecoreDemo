import { Component } from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
  <div class="text-md-center">
      <nav>
          <ul class="pagination">
              <li class="page-item">
                  <a class="page-link" href="#" aria-label="First">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">First</span>
                  </a>
              </li>
              <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                  </a>
              </li>
              <li class="page-item"><a class="page-link" href="#"></a></li>
              <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                  </a>
              </li>
              <li class="page-item">
                  <a class="page-link" href="#" aria-label="Last">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Last</span>
                  </a>
              </li>
          </ul>
      </nav>
  </div>
  `
})

export class PaginationComponent {

}
