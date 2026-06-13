import { Component, input } from '@angular/core';

export interface UiMenubarItem {
  label: string;
  href: string;
}

@Component({
  selector: 'dot-menubar',
  standalone: true,
  templateUrl: './dot-menubar.component.html',
  styleUrls: ['./dot-menubar.component.scss'],
})
export class UiMenubarComponent {
  readonly items = input<UiMenubarItem[]>([]);
}



