import { Component, computed, input, model } from '@angular/core';

export interface UiTabItem {
  label: string;
  value: string;
}

@Component({
  selector: 'dot-tabs',
  standalone: true,
  templateUrl: './dot-tabs.component.html',
  styleUrls: ['./dot-tabs.component.scss'],
})
export class UiTabsComponent {
  readonly tabs = input<UiTabItem[]>([]);
  readonly activeIndex = model(0);

  readonly activeTab = computed(() => this.tabs()[this.activeIndex()]);

  setActive(index: number): void {
    this.activeIndex.set(index);
  }

  tabClass(index: number): string {
    const base =
      'rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white';
    const active = 'bg-black text-white';
    const inactive = 'bg-transparent text-zinc-600 hover:bg-zinc-100';

    return [base, index === this.activeIndex() ? active : inactive].join(' ');
  }
}



