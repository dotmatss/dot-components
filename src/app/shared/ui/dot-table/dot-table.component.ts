import { Component, input } from '@angular/core';

export interface UiTableColumn {
  label: string;
}

export interface UiTableRow {
  cells: string[];
}

@Component({
  selector: 'dot-table',
  standalone: true,
  templateUrl: './dot-table.component.html',
  styleUrls: ['./dot-table.component.scss'],
})
export class UiTableComponent {
  readonly columns = input<UiTableColumn[]>([]);
  readonly rows = input<UiTableRow[]>([]);
}



