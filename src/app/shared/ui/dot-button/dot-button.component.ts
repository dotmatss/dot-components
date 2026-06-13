import { Component, computed, input, output } from '@angular/core';

type UiButtonVariant = 'solid' | 'outline' | 'ghost' | 'error';
type UiButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'dot-button',
  standalone: true,
  templateUrl: './dot-button.component.html',
  styleUrls: ['./dot-button.component.scss'],
})
export class UiButtonComponent {
  readonly href = input('');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly variant = input<UiButtonVariant>('solid');
  readonly size = input<UiButtonSize>('md');
  readonly disabled = input(false);
  readonly className = input('');

  readonly pressed = output<void>();

  readonly buttonClass = computed(() => {
    const base =
      'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border text-[15px] font-semibold tracking-tight transition duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50';

    const variants: Record<UiButtonVariant, string> = {
      solid: 'border-black bg-black text-white hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-black dark:hover:bg-white',
      outline: 'border-zinc-300 bg-white text-black hover:border-black hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-400 dark:hover:bg-zinc-800',
      ghost: 'border-transparent bg-transparent text-black hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800',
      error: 'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700 dark:border-red-500 dark:bg-red-500 dark:text-white dark:hover:border-red-400 dark:hover:bg-red-400',
    };

    const sizes: Record<UiButtonSize, string> = {
      sm: 'px-3.5 py-2',
      md: 'px-5 py-2.5',
      lg: 'px-6 py-3.5',
    };

    return [base, variants[this.variant()], sizes[this.size()], this.className()]
      .filter(Boolean)
      .join(' ');
  });
}



