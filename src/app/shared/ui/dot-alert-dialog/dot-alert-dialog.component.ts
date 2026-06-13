import { Component, input, output } from '@angular/core';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';

@Component({
  selector: 'dot-alert-dialog',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './dot-alert-dialog.component.html',
  styleUrls: ['./dot-alert-dialog.component.scss'],
})
export class UiAlertDialogComponent {
  readonly open = input(false);
  readonly title = input('');
  readonly description = input('');
  readonly actionLabel = input('Continue');
  readonly cancel = output<void>();
  readonly confirm = output<void>();
}






