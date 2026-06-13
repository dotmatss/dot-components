import { Component, computed, input } from '@angular/core';

export interface UiSelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'dot-select',
  standalone: true,
  templateUrl: './dot-select.component.html',
  styleUrls: ['./dot-select.component.scss'],
})
export class UiSelectComponent {
  readonly label = input('');
  readonly hint = input('');
  readonly error = input('');
  readonly placeholder = input('');
  readonly options = input<UiSelectOption[]>([]);
  readonly disabled = input(false);
  readonly className = input('');

  readonly selectClass = computed(() => {
    const base =
      'w-full appearance-none rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 pr-11 text-[15px] text-black shadow-sm transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-zinc-50';
    const errorState = this.error() ? 'border-red-500 focus:border-red-600 focus:ring-red-500/10' : '';
    return [base, errorState, this.className()].filter(Boolean).join(' ');
  });
}



