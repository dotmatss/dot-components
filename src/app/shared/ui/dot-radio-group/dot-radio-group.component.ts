import { Component, input, output } from '@angular/core';

export interface UiRadioGroupOption {
  label: string;
  value: string;
  description?: string;
}

@Component({
  selector: 'dot-radio-group',
  standalone: true,
  templateUrl: './dot-radio-group.component.html',
  styleUrls: ['./dot-radio-group.component.scss'],
})
export class UiRadioGroupComponent {
  readonly label = input('');
  readonly options = input<UiRadioGroupOption[]>([]);
  readonly selected = input('');
  readonly selectedChange = output<string>();
}



