import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'dot-calendar',
  standalone: true,
  templateUrl: './dot-calendar.component.html',
  styleUrls: ['./dot-calendar.component.scss'],
})
export class UiCalendarComponent {
  readonly selected = model<string | null>(null);
  readonly monthOffset = model(0);
  readonly year = input(new Date().getFullYear());

  readonly weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  readonly currentDate = computed(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + this.monthOffset(), 1);
  });

  readonly monthLabel = computed(() =>
    this.currentDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  );

  readonly days = computed(() => {
    const current = this.currentDate();
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();
    const selected = this.selected();

    const cells: Array<{ key: string; label: number; inMonth: boolean; selected: boolean; date: string }> = [];

    for (let index = firstDay - 1; index >= 0; index -= 1) {
      const day = previousMonthDays - index;
      const date = new Date(year, month - 1, day);
      cells.push({
        key: `prev-${day}`,
        label: day,
        inMonth: false,
        selected: false,
        date: date.toISOString().slice(0, 10),
      });
    }

    for (let day = 1; day <= totalDays; day += 1) {
      const date = new Date(year, month, day);
      const iso = date.toISOString().slice(0, 10);
      cells.push({
        key: `day-${day}`,
        label: day,
        inMonth: true,
        selected: selected === iso,
        date: iso,
      });
    }

    const trailing = (7 - (cells.length % 7)) % 7;
    for (let day = 1; day <= trailing; day += 1) {
      const date = new Date(year, month + 1, day);
      cells.push({
        key: `next-${day}`,
        label: day,
        inMonth: false,
        selected: false,
        date: date.toISOString().slice(0, 10),
      });
    }

    return cells;
  });

  previousMonth(): void {
    this.monthOffset.update((value) => value - 1);
  }

  nextMonth(): void {
    this.monthOffset.update((value) => value + 1);
  }

  selectDay(day: { date: string; inMonth: boolean }): void {
    if (day.inMonth) {
      this.selected.set(day.date);
    }
  }
}



