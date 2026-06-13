import { Component, computed, input, model, output } from '@angular/core';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';

export interface UiDropdownOption {
  label: string;
  value: string;
  description?: string;
  destructive?: boolean;
}

@Component({
  selector: 'dot-dropdown',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './dot-dropdown.component.html',
  styleUrls: ['./dot-dropdown.component.scss'],
})
export class UiDropdownComponent {
  readonly label = input('Dropdown');
  readonly heading = input('');
  readonly options = input<UiDropdownOption[]>([]);
  readonly variant = input<'solid' | 'outline' | 'ghost'>('outline');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly open = model(false);
  readonly value = model('');
  readonly className = input('');

  readonly changed = output<UiDropdownOption>();

  readonly triggerClass = computed(() => {
    return ['min-w-44 justify-between px-4', this.className()].filter(Boolean).join(' ');
  });

  readonly menuClass = computed(() => {
    const base =
      'absolute left-0 z-20 mt-2 w-72 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]';
    return base;
  });

  readonly itemClass = (destructive: boolean) =>
    [
      'flex w-full items-start rounded-xl px-3 py-2.5 text-left transition hover:bg-zinc-50',
      destructive ? 'text-red-600 hover:bg-red-50' : 'text-black',
    ].join(' ');

  toggle(): void {
    this.open.update((value) => !value);
  }

  select(option: UiDropdownOption): void {
    this.value.set(option.value);
    this.changed.emit(option);
    this.open.set(false);
  }
}






