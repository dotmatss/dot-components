import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-alert',
  standalone: true,
  templateUrl: './dot-alert.component.html',
  styleUrls: ['./dot-alert.component.scss'],
})
export class UiAlertComponent {
  readonly title = input('');
  readonly description = input('');
  readonly tone = input<'default' | 'success' | 'warning' | 'error'>('default');
  readonly icon = computed(() => {
    const icons: Record<'default' | 'success' | 'warning' | 'error', string> = {
      default: 'i',
      success: '✓',
      warning: '!',
      error: 'x',
    };

    return icons[this.tone()];
  });

  readonly alertClass = computed(() => {
    const base = 'rounded-2xl border bg-white p-4';
    const tones: Record<'default' | 'success' | 'warning' | 'error', string> = {
      default: 'border-zinc-200',
      success: 'border-emerald-200',
      warning: 'border-amber-200',
      error: 'border-red-200',
    };

    return [base, tones[this.tone()]].join(' ');
  });

  readonly iconClass = computed(() => {
    const base = 'mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold';
    const tones: Record<'default' | 'success' | 'warning' | 'error', string> = {
      default: 'bg-black text-white',
      success: 'bg-emerald-600 text-white',
      warning: 'bg-amber-500 text-white',
      error: 'bg-red-600 text-white',
    };

    return [base, tones[this.tone()]].join(' ');
  });
}



