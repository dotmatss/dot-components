import { Component, input } from '@angular/core';

export interface UiNavigationMenuItem {
  label: string;
  href: string;
  description?: string;
}

type UiNavigationMenuTone = 'light' | 'dark';
type UiNavigationMenuVariant = 'card' | 'inline';

@Component({
  selector: 'dot-navigation-menu',
  standalone: true,
  templateUrl: './dot-navigation-menu.component.html',
  styleUrls: ['./dot-navigation-menu.component.scss'],
})
export class UiNavigationMenuComponent {
  readonly title = input('Navigation');
  readonly items = input<UiNavigationMenuItem[]>([]);
  readonly tone = input<UiNavigationMenuTone>('light');
  readonly variant = input<UiNavigationMenuVariant>('card');

  readonly shellClass = () =>
    [
      this.variant() === 'card' ? 'rounded-3xl border p-4' : 'block w-full space-y-4',
      this.variant() === 'card'
        ? this.tone() === 'dark'
          ? 'border-white/10 bg-white/5 text-white'
          : 'border-zinc-200 bg-white text-black'
        : '',
    ].join(' ');

  readonly titleClass = () => (this.tone() === 'dark' ? 'text-zinc-400' : 'text-zinc-500');
  readonly itemClass = () =>
    [
      'block w-full rounded-2xl border px-4 py-3 text-left transition',
      this.variant() === 'inline'
        ? this.tone() === 'dark'
          ? 'border-white/10 hover:bg-white/8 hover:border-white/15'
          : 'border-zinc-200 hover:bg-zinc-50'
        : this.tone() === 'dark'
          ? 'border-white/10 hover:bg-white/10 hover:border-white/15'
          : 'border-zinc-200 hover:bg-zinc-50',
    ].join(' ');
  readonly itemLabelClass = () => (this.tone() === 'dark' ? 'text-white' : 'text-black');
  readonly itemDescriptionClass = () => (this.tone() === 'dark' ? 'text-zinc-400' : 'text-zinc-600');
}



