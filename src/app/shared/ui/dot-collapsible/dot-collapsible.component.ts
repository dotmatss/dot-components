import { Component, input, model } from '@angular/core';

@Component({
  selector: 'dot-collapsible',
  standalone: true,
  templateUrl: './dot-collapsible.component.html',
  styleUrls: ['./dot-collapsible.component.scss'],
})
export class UiCollapsibleComponent {
  readonly title = input('');
  readonly open = model(false);
}



