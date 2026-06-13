import { Component, input, output } from '@angular/core';

@Component({
  selector: 'dot-toast',
  standalone: true,
  templateUrl: './dot-toast.component.html',
  styleUrls: ['./dot-toast.component.scss'],
})
export class UiToastComponent {
  readonly title = input('');
  readonly description = input('');
  readonly dismiss = output<void>();
}



