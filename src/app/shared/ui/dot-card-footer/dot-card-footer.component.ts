import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-card-footer',
  standalone: true,
  templateUrl: './dot-card-footer.component.html',
  styleUrls: ['./dot-card-footer.component.scss'],
})
export class UiCardFooterComponent {
  readonly className = input('');

  readonly footerClass = computed(() => {
    return ['mt-6 border-t border-zinc-200 pt-4 text-sm text-zinc-600', this.className()]
      .filter(Boolean)
      .join(' ');
  });
}



