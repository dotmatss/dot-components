import { Component, computed, input, model } from '@angular/core';

export interface UiAccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'dot-accordion',
  standalone: true,
  templateUrl: './dot-accordion.component.html',
  styleUrls: ['./dot-accordion.component.scss'],
})
export class UiAccordionComponent {
  readonly items = input<UiAccordionItem[]>([]);
  readonly openIndex = model(0);

  panelClass(isOpen: boolean): string {
    return [
      'grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out',
      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
    ].join(' ');
  }

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? -1 : index);
  }
}



