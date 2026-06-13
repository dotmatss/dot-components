import { Component, computed, input, output } from '@angular/core';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';

@Component({
  selector: 'dot-dialog',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './dot-dialog.component.html',
  styleUrls: ['./dot-dialog.component.scss'],
})
export class UiDialogComponent {
  readonly title = input('');
  readonly description = input('');
  readonly actionLabel = input('Save changes');
  readonly cancelLabel = input('Cancel');
  readonly closeLabel = input('Close dialog');
  readonly className = input('');

  readonly confirm = output<void>();
  readonly dismiss = output<void>();

  readonly dialogClass = computed(() => {
    const base = 'rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]';
    return [base, this.className()].filter(Boolean).join(' ');
  });
}






