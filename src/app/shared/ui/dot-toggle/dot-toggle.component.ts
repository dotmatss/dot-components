import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'dot-toggle',
  standalone: true,
  templateUrl: './dot-toggle.component.html',
  styleUrls: ['./dot-toggle.component.scss'],
})
export class UiToggleComponent {
  readonly on = model(false);
  readonly disabled = input(false);

  readonly toggleClass = computed(() => {
    const base =
      'inline-flex h-7 w-12 items-center rounded-full border px-0.5 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white';
    const active = this.on() ? 'border-black bg-black' : 'border-zinc-400 bg-zinc-200';
    const disabled = this.disabled() ? 'cursor-not-allowed opacity-40' : 'cursor-pointer';

    return [base, active, disabled].join(' ');
  });

  readonly thumbClass = computed(() => {
    return [
      'h-6 w-6 rounded-full bg-white shadow-sm transition',
      this.on() ? 'translate-x-5' : 'translate-x-0',
    ].join(' ');
  });

  toggle(): void {
    if (!this.disabled()) {
      this.on.update((value) => !value);
    }
  }
}



