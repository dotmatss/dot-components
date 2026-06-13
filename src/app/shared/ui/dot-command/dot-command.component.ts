import { Component, input } from '@angular/core';
import { UiInputComponent } from '@components/dot-input/dot-input.component';

export interface UiCommandItem {
  label: string;
  hint?: string;
}

@Component({
  selector: 'dot-command',
  standalone: true,
  imports: [UiInputComponent],
  templateUrl: './dot-command.component.html',
  styleUrls: ['./dot-command.component.scss'],
})
export class UiCommandComponent {
  readonly items = input<UiCommandItem[]>([]);
}






