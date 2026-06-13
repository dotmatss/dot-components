import { Component, input, output } from '@angular/core';

@Component({
  selector: 'dot-sheet',
  standalone: true,
  templateUrl: './dot-sheet.component.html',
  styleUrls: ['./dot-sheet.component.scss'],
})
export class UiSheetComponent {
  readonly open = input(false);
  readonly title = input('');
  readonly side = input<'left' | 'right'>('right');
  readonly dismiss = output<void>();

  readonly sheetClass = () =>
    [
      'fixed top-0 z-30 h-full w-full max-w-sm bg-white shadow-[0_30px_80px_rgba(0,0,0,0.24)]',
      this.side() === 'right' ? 'right-0' : 'left-0',
    ].join(' ');
}



