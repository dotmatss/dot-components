import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-color-swatch',
  standalone: true,
  templateUrl: './dot-color-swatch.component.html',
  styleUrls: ['./dot-color-swatch.component.scss'],
})
export class UiColorSwatchComponent {
  readonly name = input('');
  readonly value = input('');
  readonly tone = input<'black' | 'dark' | 'gray' | 'light' | 'white'>('black');

  readonly swatchClass = computed(() => {
    const base = 'h-12 w-12 rounded-xl border border-zinc-200';
    const tones: Record<'black' | 'dark' | 'gray' | 'light' | 'white', string> = {
      black: 'bg-black',
      dark: 'bg-zinc-800',
      gray: 'bg-zinc-500',
      light: 'bg-zinc-100',
      white: 'bg-white',
    };

    return [base, tones[this.tone()]].join(' ');
  });
}



