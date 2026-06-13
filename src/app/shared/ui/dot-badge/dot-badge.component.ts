import { Component, computed, input } from '@angular/core';

type UiBadgeVariant = 'solid' | 'outline' | 'soft';
type UiBadgeTone = 'default' | 'success' | 'warning' | 'error';

@Component({
  selector: 'dot-badge',
  standalone: true,
  templateUrl: './dot-badge.component.html',
  styleUrls: ['./dot-badge.component.scss'],
})
export class UiBadgeComponent {
  readonly variant = input<UiBadgeVariant>('solid');
  readonly tone = input<UiBadgeTone>('default');
  readonly className = input('');

  readonly badgeClass = computed(() => {
    const base =
      'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]';

    const variants: Record<UiBadgeVariant, string> = {
      solid: 'border-black bg-black text-white',
      outline: 'border-black bg-white text-black',
      soft: 'border-zinc-300 bg-zinc-100 text-zinc-900',
    };

    const tones: Record<UiBadgeTone, string> = {
      default: '',
      success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      warning: 'border-amber-200 bg-amber-50 text-amber-700',
      error: 'border-red-200 bg-red-50 text-red-700',
    };

    return [base, variants[this.variant()], tones[this.tone()], this.className()].filter(Boolean).join(' ');
  });
}



