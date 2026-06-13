import { Component, computed, input } from '@angular/core';
import { UiAvatarComponent } from '@components/dot-avatar/dot-avatar.component';

@Component({
  selector: 'dot-list-item',
  standalone: true,
  imports: [UiAvatarComponent],
  templateUrl: './dot-list-item.component.html',
  styleUrls: ['./dot-list-item.component.scss'],
})
export class UiListItemComponent {
  readonly title = input('');
  readonly description = input('');
  readonly meta = input('');
  readonly avatar = input('');

  readonly itemClass = computed(() => {
    return 'flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition hover:bg-zinc-50';
  });
}






