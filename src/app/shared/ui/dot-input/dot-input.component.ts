import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-input',
  standalone: true,
  templateUrl: './dot-input.component.html',
  styleUrls: ['./dot-input.component.scss'],
})
export class UiInputComponent {
  readonly label = input('');
  readonly hint = input('');
  readonly error = input('');
  readonly type = input('text');
  readonly placeholder = input('');
  readonly value = input('');
  readonly disabled = input(false);
  readonly className = input('');

  readonly inputClass = computed(() => {
    const base =
      'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-black placeholder:text-zinc-500 shadow-sm transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:cursor-not-allowed disabled:bg-zinc-50';
    const errorState = this.error() ? 'border-red-500 focus:border-red-600 focus:ring-red-500/10' : '';
    return [base, errorState, this.className()].filter(Boolean).join(' ');
  });
}



