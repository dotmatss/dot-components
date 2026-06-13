import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-chip',
  standalone: true,
  templateUrl: './dot-chip.component.html',
  styleUrls: ['./dot-chip.component.scss'],
})
export class UiChipComponent {
  readonly selected = input(false);
  readonly removable = input(false);

  readonly chipClass = computed(() => {
    const base =
      'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition';
    const active = this.selected()
      ? 'border-black bg-black text-white'
      : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100';

    return [base, active].join(' ');
  });
}



