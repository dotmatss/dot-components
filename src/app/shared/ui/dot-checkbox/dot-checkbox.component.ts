import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'dot-checkbox',
  standalone: true,
  templateUrl: './dot-checkbox.component.html',
  styleUrls: ['./dot-checkbox.component.scss'],
})
export class UiCheckboxComponent {
  readonly label = input('');
  readonly disabled = input(false);
  readonly checked = model(false);

  readonly boxClass = computed(() => {
    const base =
      'flex h-5 w-5 items-center justify-center rounded-md border transition group-hover:border-black';
    const enabled = this.checked()
      ? 'border-black bg-black shadow-sm'
      : 'border-zinc-300 bg-white group-hover:bg-zinc-50';
    const disabled = this.disabled() ? 'cursor-not-allowed opacity-40 group-hover:border-zinc-300' : 'cursor-pointer';

    return [base, enabled, disabled].join(' ');
  });

  toggle(): void {
    if (!this.disabled()) {
      this.checked.update((value) => !value);
    }
  }
}



