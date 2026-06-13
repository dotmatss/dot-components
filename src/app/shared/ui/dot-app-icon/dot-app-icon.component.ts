import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-app-icon',
  standalone: true,
  templateUrl: './dot-app-icon.component.html',
  styleUrls: ['./dot-app-icon.component.scss'],
})
export class UiAppIconComponent {
  readonly label = input('App icon');
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  readonly iconClass = computed(() => {
    const base =
      'inline-flex items-center justify-center overflow-hidden rounded-2xl border border-black bg-black text-white';
    const sizes: Record<'sm' | 'md' | 'lg', string> = {
      sm: 'h-8 w-8 p-1',
      md: 'h-12 w-12 p-2',
      lg: 'h-14 w-14 p-2.5',
    };

    return [base, sizes[this.size()]].join(' ');
  });
}



