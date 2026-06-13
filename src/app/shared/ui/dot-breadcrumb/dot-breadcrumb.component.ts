import { Component, input } from '@angular/core';

export interface UiBreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'dot-breadcrumb',
  standalone: true,
  templateUrl: './dot-breadcrumb.component.html',
  styleUrls: ['./dot-breadcrumb.component.scss'],
})
export class UiBreadcrumbComponent {
  readonly items = input<UiBreadcrumbItem[]>([]);
}



