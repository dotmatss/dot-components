import { Component, computed, input } from '@angular/core';

type UiSkeletonVariant = 'text' | 'rect' | 'circle';

@Component({
  selector: 'dot-skeleton',
  standalone: true,
  templateUrl: './dot-skeleton.component.html',
  styleUrls: ['./dot-skeleton.component.scss'],
})
export class UiSkeletonComponent {
  readonly label = input('Loading content');
  readonly variant = input<UiSkeletonVariant>('text');
  readonly lines = input(3);
  readonly animated = input(true);
  readonly className = input('');

  readonly rootClass = computed(() => {
    const base = 'block';
    const variants: Record<UiSkeletonVariant, string> = {
      text: 'space-y-3',
      rect: 'overflow-hidden',
      circle: 'flex items-center justify-start overflow-hidden',
    };

    return [base, variants[this.variant()], this.className()].filter(Boolean).join(' ');
  });

  readonly skeletonClass = computed(() => {
    const base = 'bg-zinc-200 dark:bg-zinc-700';
    const motion = this.animated() ? 'animate-pulse' : '';

    return [base, motion].filter(Boolean).join(' ');
  });

  readonly textLines = computed(() =>
    Array.from({ length: Math.max(1, this.lines()) }, (_, index) => index)
  );

  readonly textLineWidths = computed(() => {
    const count = Math.max(1, this.lines());

    return this.textLines().map((index) => {
      if (count === 1) {
        return 'w-full';
      }

      if (index === count - 1) {
        return count === 2 ? 'w-3/4' : 'w-5/6';
      }

      return 'w-full';
    });
  });
}



