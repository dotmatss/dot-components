import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'dot-pagination',
  standalone: true,
  templateUrl: './dot-pagination.component.html',
  styleUrls: ['./dot-pagination.component.scss'],
})
export class UiPaginationComponent {
  readonly totalPages = input(5);
  readonly currentPage = input(1);
  readonly previous = output<void>();
  readonly next = output<void>();
  readonly pageSelected = output<number>();

  readonly pages = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));
}



