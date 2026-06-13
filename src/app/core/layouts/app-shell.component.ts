import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, HostListener, computed, effect, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UiAppIconComponent } from '@components/dot-app-icon/dot-app-icon.component';

type SidebarAction = {
  label: string;
  href: string;
  icon: SidebarIconName;
  exact?: boolean;
};

type PinnedChat = {
  label: string;
};

type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

type SidebarIconName = 'plus' | 'search' | 'book' | 'folder' | 'grid' | 'code' | 'dots' | 'chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, UiAppIconComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly primaryActions: SidebarAction[] = [
    { label: 'Home', href: '/', icon: 'plus', exact: true },
    { label: 'Dashboard', href: '/dashboard', icon: 'book' },
    { label: 'Forms', href: '/forms', icon: 'grid' },
    { label: 'AI', href: '/ai', icon: 'chat' },
    { label: 'Library', href: '/components', icon: 'search' },
    { label: 'Projects', href: '/layouts', icon: 'folder' },
    { label: 'Apps', href: '/contact', icon: 'grid' },
    { label: 'Gradient', href: '/gradient', icon: 'book' },
    { label: 'Template', href: '/template', icon: 'book' },
    { label: 'Codex', href: '/auth', icon: 'code' },
    { label: 'More', href: '/settings', icon: 'dots' },
  ];

  readonly pinnedChats: PinnedChat[] = [
    { label: 'AI-Powered Notes App' },
    { label: 'Budget Tracker App UI' },
    { label: 'Golang Flutter Architecture' },
    { label: 'AI Stray Animal App' },
    { label: 'Vibe Coding Roadmap' },
    { label: 'Solution Architect Roadmap' },
    { label: 'AI Guided Study App' },
    { label: 'n8n Local Machine Requirements' },
    { label: 'UI Prototype Budget Tracker' },
  ];

  readonly chatWidgetOpen = signal(false);
  readonly chatMessages: ChatMessage[] = [
    { role: 'assistant', text: 'Need a quick hand? I can summarize the current page or draft a reply.' },
    { role: 'user', text: 'What should I change first?' },
    { role: 'assistant', text: 'Start with the highest-friction surface, then align the copy and actions around it.' },
  ];
  readonly chatSuggestions = ['Summarize page', 'Draft reply', 'Find next step'];

  readonly menuOpen = signal(false);
  readonly sidebarCollapsed = signal(false);
  readonly theme = signal<'light' | 'dark'>(this.loadTheme());
  readonly currentPath = signal(this.router.url);
  readonly showChrome = computed(() => !['/', '/landing'].includes(this.currentPath()));
  readonly showSidebarDetails = computed(() => !this.sidebarCollapsed());
  readonly sidebarWidth = computed(() => (this.sidebarCollapsed() ? 92 : 320));
  readonly chatRailWidth = computed(() => (this.chatWidgetOpen() ? 408 : 76));

  readonly sidebarClass = computed(() =>
    [
      'fixed inset-y-0 left-0 z-40 flex overflow-hidden -translate-x-full flex-col border-r border-white/10 bg-black px-4 py-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-[width,transform] duration-300 ease-in-out',
      'lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shrink-0',
      this.menuOpen() ? 'translate-x-0' : '',
    ].join(' '),
  );

  readonly actionClass = computed(() =>
    [
      'flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition',
      'text-zinc-300 hover:bg-white/10 hover:text-white',
      this.sidebarCollapsed() ? 'justify-center' : '',
    ].join(' '),
  );

  constructor() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath.set(this.router.url);
      }

      if (event instanceof NavigationStart) {
        this.menuOpen.set(false);
      }
    });

    effect(() => {
      const nextTheme = this.theme();
      const root = this.document.documentElement;
      root.classList.toggle('dark', nextTheme === 'dark');
      this.document.body.style.colorScheme = nextTheme;
      try {
        localStorage.setItem('tala-theme', nextTheme);
      } catch {
        // Ignore storage failures and keep the default light theme.
      }
    });

    effect((onCleanup) => {
      const body = this.document.body;
      const previousOverflow = body.style.overflow;
      body.style.overflow = this.menuOpen() ? 'hidden' : '';
      onCleanup(() => {
        body.style.overflow = previousOverflow;
      });
    });
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openMenu(): void {
    this.sidebarCollapsed.set(false);
    this.menuOpen.set(true);
  }

  toggleSidebarCollapsed(): void {
    this.menuOpen.set(false);
    this.sidebarCollapsed.update((value) => !value);
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  toggleChatWidget(): void {
    this.chatWidgetOpen.update((value) => !value);
  }

  private loadTheme(): 'light' | 'dark' {
    try {
      const saved = localStorage.getItem('tala-theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  }
}






