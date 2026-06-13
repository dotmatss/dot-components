import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-card-content',
  standalone: true,
  templateUrl: './dot-card-content.component.html',
  styleUrls: ['./dot-card-content.component.scss'],
})
export class UiCardContentComponent {
  readonly className = input('');

  readonly contentClass = computed(() => {
    return ['mt-5', this.className()].filter(Boolean).join(' ');
  });
}



