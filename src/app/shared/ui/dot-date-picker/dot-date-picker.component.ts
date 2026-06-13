import { Component, input, model } from '@angular/core';
import { UiCalendarComponent } from '@components/dot-calendar/dot-calendar.component';

@Component({
  selector: 'dot-date-picker',
  standalone: true,
  imports: [UiCalendarComponent],
  templateUrl: './dot-date-picker.component.html',
  styleUrls: ['./dot-date-picker.component.scss'],
})
export class UiDatePickerComponent {
  readonly label = input('');
  readonly placeholder = input('Select a date');
  readonly value = model<string | null>(null);
}






