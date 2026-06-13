import { Component, computed, input, model } from '@angular/core';

export interface UiCarouselItem {
  title: string;
  description: string;
}

@Component({
  selector: 'dot-carousel',
  standalone: true,
  templateUrl: './dot-carousel.component.html',
  styleUrls: ['./dot-carousel.component.scss'],
})
export class UiCarouselComponent {
  readonly title = input('Carousel');
  readonly description = input('');
  readonly items = input<UiCarouselItem[]>([]);
  readonly activeIndex = model(0);

  readonly activeItem = computed(() => this.items()[this.activeIndex()]);

  previous(): void {
    const count = this.items().length;
    if (count > 0) {
      this.activeIndex.set((this.activeIndex() - 1 + count) % count);
    }
  }

  next(): void {
    const count = this.items().length;
    if (count > 0) {
      this.activeIndex.set((this.activeIndex() + 1) % count);
    }
  }
}



