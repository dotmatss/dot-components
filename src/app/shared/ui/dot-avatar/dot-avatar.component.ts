import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'dot-avatar',
  standalone: true,
  templateUrl: './dot-avatar.component.html',
  styleUrls: ['./dot-avatar.component.scss'],
})
export class UiAvatarComponent {
  readonly name = input('');
  readonly src = input('');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly status = input(false);
  readonly imageFailed = signal(false);

  readonly initials = computed(() => {
    const parts = this.name().trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return 'A';
    }

    return parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  });

  readonly avatarSrc = computed(() => {
    if (this.imageFailed()) {
      return '';
    }

    const explicitSrc = this.src().trim();
    if (explicitSrc) {
      return explicitSrc;
    }

    const seed = this.name().trim() || 'avatar';
    const hash = Array.from(seed).reduce((accumulator, char) => accumulator + char.charCodeAt(0), 0);
    const gender = hash % 2 === 0 ? 'men' : 'women';
    const imageId = (hash % 99) + 1;

    return `https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`;
  });

  readonly avatarClass = computed(() => {
    const sizes: Record<'sm' | 'md' | 'lg', string> = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    };

    return ['relative inline-flex flex-none items-center justify-center', sizes[this.size()]].join(' ');
  });

  readonly avatarSurfaceClass = computed(() => {
    const base =
      'flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 text-black';
    const sizes: Record<'sm' | 'md' | 'lg', string> = {
      sm: '',
      md: '',
      lg: '',
    };

    return [base, sizes[this.size()]].join(' ');
  });

  onImageError(): void {
    this.imageFailed.set(true);
  }
}



