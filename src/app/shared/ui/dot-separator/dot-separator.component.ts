import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-separator',
  standalone: true,
  templateUrl: './dot-separator.component.html',
  styleUrls: ['./dot-separator.component.scss'],
})
export class UiSeparatorComponent {
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  readonly className = input('');

  readonly separatorClass = computed(() => {
    const base = 'bg-zinc-200 dark:bg-zinc-800';
    const orientationClass = this.orientation() === 'vertical' ? 'h-full w-px' : 'h-px w-full';

    return [base, orientationClass, this.className()].filter(Boolean).join(' ');
  });
}



