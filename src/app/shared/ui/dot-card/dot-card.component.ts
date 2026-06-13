import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-card',
  standalone: true,
  templateUrl: './dot-card.component.html',
  styleUrls: ['./dot-card.component.scss'],
})
export class UiCardComponent {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly description = input('');
  readonly footer = input('');
  readonly showHeader = input(true);
  readonly showContent = input(true);
  readonly showFooter = input(true);
  readonly className = input('');

  readonly cardClass = computed(() => {
    const base =
      'rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.32)]';
    return [base, this.className()].filter(Boolean).join(' ');
  });
}



