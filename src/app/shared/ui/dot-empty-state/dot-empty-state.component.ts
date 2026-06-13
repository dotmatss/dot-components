import { Component, input, output } from '@angular/core';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';

@Component({
  selector: 'dot-empty-state',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './dot-empty-state.component.html',
  styleUrls: ['./dot-empty-state.component.scss'],
})
export class UiEmptyStateComponent {
  readonly title = input('');
  readonly description = input('');
  readonly actionLabel = input('Get started');
  readonly secondaryLabel = input('');
  readonly action = output<void>();
  readonly secondary = output<void>();
}






