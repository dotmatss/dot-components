import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-progress',
  standalone: true,
  templateUrl: './dot-progress.component.html',
  styleUrls: ['./dot-progress.component.scss'],
})
export class UiProgressComponent {
  readonly label = input('');
  readonly value = input(0);

  readonly safeValue = computed(() => Math.max(0, Math.min(100, this.value())));
}



