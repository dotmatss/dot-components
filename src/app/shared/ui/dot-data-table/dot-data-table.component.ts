import { Component, computed, input, signal } from '@angular/core';
import { UiTableColumn, UiTableRow, UiTableComponent } from '@components/dot-table/dot-table.component';

@Component({
  selector: 'dot-data-table',
  standalone: true,
  imports: [UiTableComponent],
  templateUrl: './dot-data-table.component.html',
  styleUrls: ['./dot-data-table.component.scss'],
})
export class UiDataTableComponent {
  readonly title = input('Data table');
  readonly description = input('');
  readonly columns = input<UiTableColumn[]>([]);
  readonly rows = input<UiTableRow[]>([]);
  readonly query = signal('');

  readonly filteredRows = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query) {
      return this.rows();
    }
    return this.rows().filter((row) => row.cells.some((cell) => cell.toLowerCase().includes(query)));
  });

  setQuery(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.query.set(target?.value ?? '');
  }
}






