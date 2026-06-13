import { Component, computed, effect, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { UiAppIconComponent } from '@components/dot-app-icon/dot-app-icon.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiNavigationMenuComponent } from '@components/dot-navigation-menu/dot-navigation-menu.component';

export interface UiNavbarLink {
  label: string;
  href?: string;
  menu?: UiNavbarMenuSection[];
}

export interface UiNavbarMenuSection {
  title: string;
  items: UiNavbarMenuItem[];
}

export interface UiNavbarMenuItem {
  label: string;
  description: string;
  href: string;
}

export interface UiNavbarMenuAction {
  label: string;
  href: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

type UiNavbarTone = 'light' | 'dark';

@Component({
  selector: 'dot-navbar',
  standalone: true,
  imports: [UiAppIconComponent, UiButtonComponent, UiNavigationMenuComponent],
  templateUrl: './dot-navbar.component.html',
  styleUrls: ['./dot-navbar.component.scss'],
})
export class UiNavbarComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly brand = input('Tala');
  readonly tagline = input('Black and white system');
  readonly tone = input<UiNavbarTone>('light');
  readonly links = input<UiNavbarLink[]>([]);
  readonly actions = input<UiNavbarMenuAction[]>([]);
  readonly defaultOpenMenu = input<string | null>(null);

  readonly openMenu = signal<string | null>(null);

  readonly shellClass = computed(() =>
    [
      'rounded-[32px] border px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.06)]',
      this.tone() === 'dark'
        ? 'border-white/10 bg-black text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]'
        : 'border-zinc-200 bg-white text-black',
    ].join(' '),
  );

  readonly brandTitleClass = computed(() => (this.tone() === 'dark' ? 'text-white' : 'text-black'));
  readonly brandTaglineClass = computed(() => (this.tone() === 'dark' ? 'text-zinc-400' : 'text-zinc-500'));
  readonly linkClass = computed(() =>
    [
      'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition',
      this.tone() === 'dark'
        ? 'text-zinc-300 hover:bg-white/10 hover:text-white'
        : 'text-zinc-700 hover:bg-zinc-100 hover:text-black',
    ].join(' '),
  );
  readonly menuButtonClass = computed(() =>
    [
      'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition',
      this.tone() === 'dark'
        ? 'bg-white/10 text-white hover:bg-white/15'
        : 'bg-zinc-100 text-black hover:bg-zinc-200',
    ].join(' '),
  );
  readonly panelClass = computed(() =>
    [
      'w-[min(940px,calc(100vw-3rem))] rounded-[28px] border p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur',
      this.tone() === 'dark'
        ? 'border-white/10 bg-zinc-950/95 text-white'
        : 'border-zinc-200 bg-white text-black',
    ].join(' '),
  );
  readonly triggerWrapClass = computed(() => 'relative');
  readonly menuPanelWrapClass = computed(() => 'absolute left-0 top-full z-30 pt-4');

  constructor() {
    effect(() => {
      this.openMenu.set(this.defaultOpenMenu());
    });
  }

  open(label: string): void {
    this.openMenu.set(label);
  }

  closeMenu(): void {
    this.openMenu.set(null);
  }

  isMenuOpen(label: string): boolean {
    return this.openMenu() === label;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;
    if (target && !this.elementRef.nativeElement.contains(target)) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}






