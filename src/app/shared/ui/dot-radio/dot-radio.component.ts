import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'dot-radio',
  standalone: true,
  templateUrl: './dot-radio.component.html',
  styleUrls: ['./dot-radio.component.scss'],
})
export class UiRadioComponent {
  readonly label = input('');
  readonly disabled = input(false);
  readonly selected = model(false);

  readonly ringClass = computed(() => {
    const base = 'flex h-4 w-4 items-center justify-center rounded-full border transition';
    const enabled = this.selected() ? 'border-black' : 'border-zinc-300';
    const disabled = this.disabled() ? 'cursor-not-allowed opacity-40' : 'cursor-pointer';

    return [base, enabled, disabled].join(' ');
  });

  select(): void {
    if (!this.disabled()) {
      this.selected.set(true);
    }
  }
}



