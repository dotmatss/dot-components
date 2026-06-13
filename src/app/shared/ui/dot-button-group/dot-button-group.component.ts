import { Component, input, output } from '@angular/core';

export interface UiButtonGroupItem {
  label: string;
  value: string;
}

@Component({
  selector: 'dot-button-group',
  standalone: true,
  templateUrl: './dot-button-group.component.html',
  styleUrls: ['./dot-button-group.component.scss'],
})
export class UiButtonGroupComponent {
  readonly items = input<UiButtonGroupItem[]>([]);
  readonly selected = input('');
  readonly selectedChange = output<string>();

  buttonClass(value: string): string {
    const base = 'rounded-xl px-4 py-2 text-sm font-semibold transition';
    const active = this.selected() === value;
    return [
      base,
      active ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100',
    ].join(' ');
  }
}



