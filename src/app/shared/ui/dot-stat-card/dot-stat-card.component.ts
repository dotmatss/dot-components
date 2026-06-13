import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-stat-card',
  standalone: true,
  templateUrl: './dot-stat-card.component.html',
  styleUrls: ['./dot-stat-card.component.scss'],
})
export class UiStatCardComponent {
  readonly label = input('');
  readonly value = input('');
  readonly trend = input('');

  readonly cardClass = computed(() => {
    return 'rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]';
  });
}



