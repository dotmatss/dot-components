import { Component, computed, input } from '@angular/core';

type UiIconName = 'plus' | 'pencil' | 'trash' | 'bookmark' | 'search' | 'share';
type UiIconButtonVariant = 'solid' | 'outline' | 'ghost';

@Component({
  selector: 'dot-icon-button',
  standalone: true,
  templateUrl: './dot-icon-button.component.html',
  styleUrls: ['./dot-icon-button.component.scss'],
})
export class UiIconButtonComponent {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly icon = input<UiIconName>('plus');
  readonly label = input('');
  readonly variant = input<UiIconButtonVariant>('outline');
  readonly disabled = input(false);
  readonly className = input('');

  readonly buttonClass = computed(() => {
    const base =
      'inline-flex h-11 w-11 items-center justify-center rounded-xl border transition duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50';

    const variants: Record<UiIconButtonVariant, string> = {
      solid: 'border-black bg-black text-white hover:bg-zinc-800',
      outline: 'border-zinc-300 bg-white text-black hover:border-black hover:bg-zinc-50',
      ghost: 'border-transparent bg-transparent text-black hover:bg-zinc-100',
    };

    return [base, variants[this.variant()], this.className()].filter(Boolean).join(' ');
  });
}



