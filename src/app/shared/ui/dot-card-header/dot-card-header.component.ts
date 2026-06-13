import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-card-header',
  standalone: true,
  templateUrl: './dot-card-header.component.html',
  styleUrls: ['./dot-card-header.component.scss'],
})
export class UiCardHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly description = input('');
  readonly className = input('');

  readonly headerClass = computed(() => {
    return ['space-y-2', this.className()].filter(Boolean).join(' ');
  });
}



