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
  template: `
    <div
      class="min-h-screen overflow-x-clip bg-zinc-100 text-black transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100 lg:flex lg:h-screen lg:overflow-hidden"
    >
      @if (showChrome()) {
        @if (menuOpen()) {
          <div class="fixed inset-0 z-30 bg-black/50 lg:hidden" (click)="menuOpen.set(false)"></div>
        }
        <!--
        <aside [class]="sidebarClass()" [style.width.px]="sidebarWidth()" aria-label="Primary sidebar">
          <div class="flex h-full flex-col">
            <div class="mb-4 flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <dot-app-icon size="sm" label="Tala client icon"></dot-app-icon>
                @if (showSidebarDetails()) {
                  <span class="text-sm font-semibold tracking-tight text-white">Tala Client</span>
                }
              </div>

              <button
                type="button"
                class="hidden rounded-full border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white lg:inline-flex"
                (click)="toggleSidebarCollapsed()"
                [title]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
                [attr.aria-label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
              >
                <span aria-hidden="true">{{ sidebarCollapsed() ? '[]' : '||' }}</span>
              </button>
            </div>

            <div class="space-y-1">
              @for (action of primaryActions; track action.label) {
                <a
                  [routerLink]="action.href"
                  [routerLinkActiveOptions]="{ exact: action.exact ?? false }"
                  routerLinkActive="bg-white/10 text-white"
                  [class]="actionClass()"
                  (click)="menuOpen.set(false)"
                  [title]="sidebarCollapsed() ? action.label : ''"
                >
                  <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                    @switch (action.icon) {
                      @case ('plus') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                          <path d="M12 5v14"></path>
                          <path d="M5 12h14"></path>
                        </svg>
                      }
                      @case ('search') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="11" cy="11" r="6"></circle>
                          <path d="M20 20l-3.5-3.5"></path>
                        </svg>
                      }
                      @case ('book') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M7 4h10a2 2 0 0 1 2 2v14H9a2 2 0 0 0-2 2V4Z"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      }
                      @case ('folder') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path>
                        </svg>
                      }
                      @case ('grid') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                          <path d="M5 5h5v5H5z"></path>
                          <path d="M14 5h5v5h-5z"></path>
                          <path d="M5 14h5v5H5z"></path>
                          <path d="M14 14h5v5h-5z"></path>
                        </svg>
                      }
                      @case ('code') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M8 9 4 12l4 3"></path>
                          <path d="M16 9l4 3-4 3"></path>
                          <path d="m14 7-4 10"></path>
                        </svg>
                      }
                      @case ('dots') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                          <path d="M6 12h.01"></path>
                          <path d="M12 12h.01"></path>
                          <path d="M18 12h.01"></path>
                        </svg>
                      }
                      @case ('chat') {
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                          <path d="M8 9h8"></path>
                          <path d="M8 13h5"></path>
                        </svg>
                      }
                    }
                  </span>
                  @if (showSidebarDetails()) {
                    <span class="min-w-0 truncate text-[15px] font-medium">{{ action.label }}</span>
                  }
                </a>
              }
            </div>

            @if (showSidebarDetails()) {
              <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <div class="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-400">
                  Search chats
                </div>
              </div>
            }

            <div class="min-h-0 flex-1 overflow-y-auto pr-1">
              <div class="mt-6 space-y-4">
                @if (showSidebarDetails()) {
                  <p class="px-2 text-sm font-semibold text-white">Pinned</p>
                }
                <div class="space-y-1">
                  @for (chat of pinnedChats; track chat.label) {
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition hover:bg-white/10"
                      [title]="sidebarCollapsed() ? chat.label : ''"
                    >
                      <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-transparent text-white/85">
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                          <path d="M8 9h8"></path>
                          <path d="M8 13h5"></path>
                        </svg>
                      </span>
                      @if (showSidebarDetails()) {
                        <span class="min-w-0 truncate text-[15px] text-zinc-100">
                          {{ chat.label }}
                        </span>
                      }
                    </button>
                  }
                </div>
              </div>
            </div>

            <div class="mt-4 border-t border-white/10 pt-4">
              <div class="flex items-center gap-3 rounded-2xl px-2 py-2">
                <div class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-500 text-sm font-semibold text-black">
                  TA
                </div>
                @if (showSidebarDetails()) {
                  <div class="min-w-0">
                    <p class="truncate text-[15px] font-medium text-white">Tala User</p>
                    <p class="text-sm text-zinc-400">Free</p>
                  </div>
                }
              </div>

              @if (showSidebarDetails()) {
                <div class="mt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
                    (click)="toggleTheme()"
                  >
                    {{ theme() === 'dark' ? 'Light mode' : 'Dark mode' }}
                  </button>
                  <button
                    type="button"
                    class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5"
                  >
                    Upgrade
                  </button>
                </div>
              }
            </div>
          </div>
        </aside>
        -->
      }

      @if (showChrome()) {
        <div class="flex min-h-screen min-w-0 flex-1 lg:h-full">
          <aside [class]="sidebarClass()" [style.width.px]="sidebarWidth()" aria-label="Primary sidebar">
            <div class="flex h-full flex-col">
              <div class="mb-4 flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <dot-app-icon size="sm" label="Tala client icon"></dot-app-icon>
                  @if (showSidebarDetails()) {
                    <span class="text-sm font-semibold tracking-tight text-white">Tala Client</span>
                  }
                </div>

                <button
                  type="button"
                  class="hidden rounded-full border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white lg:inline-flex"
                  (click)="toggleSidebarCollapsed()"
                  [title]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
                  [attr.aria-label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
                >
                  <span aria-hidden="true">{{ sidebarCollapsed() ? '[]' : '||' }}</span>
                </button>
              </div>

              <div class="space-y-1">
                @for (action of primaryActions; track action.label) {
                  <a
                    [routerLink]="action.href"
                    [routerLinkActiveOptions]="{ exact: action.exact ?? false }"
                    routerLinkActive="bg-white/10 text-white"
                    [class]="actionClass()"
                    (click)="menuOpen.set(false)"
                    [title]="sidebarCollapsed() ? action.label : ''"
                  >
                    <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                      @switch (action.icon) {
                        @case ('plus') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                            <path d="M12 5v14"></path>
                            <path d="M5 12h14"></path>
                          </svg>
                        }
                        @case ('search') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="6"></circle>
                            <path d="M20 20l-3.5-3.5"></path>
                          </svg>
                        }
                        @case ('book') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 4h10a2 2 0 0 1 2 2v14H9a2 2 0 0 0-2 2V4Z"></path>
                            <path d="M7 4v16"></path>
                          </svg>
                        }
                        @case ('folder') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path>
                          </svg>
                        }
                        @case ('grid') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                            <path d="M5 5h5v5H5z"></path>
                            <path d="M14 5h5v5h-5z"></path>
                            <path d="M5 14h5v5H5z"></path>
                            <path d="M14 14h5v5h-5z"></path>
                          </svg>
                        }
                        @case ('code') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M8 9 4 12l4 3"></path>
                            <path d="M16 9l4 3-4 3"></path>
                            <path d="m14 7-4 10"></path>
                          </svg>
                        }
                        @case ('dots') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                            <path d="M6 12h.01"></path>
                            <path d="M12 12h.01"></path>
                            <path d="M18 12h.01"></path>
                          </svg>
                        }
                        @case ('chat') {
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                            <path d="M8 9h8"></path>
                            <path d="M8 13h5"></path>
                          </svg>
                        }
                      }
                    </span>
                    @if (showSidebarDetails()) {
                      <span class="min-w-0 truncate text-[15px] font-medium">{{ action.label }}</span>
                    }
                  </a>
                }
              </div>

              @if (showSidebarDetails()) {
                <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <div class="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-400">
                    Search chats
                  </div>
                </div>
              }

              <div class="min-h-0 flex-1 overflow-y-auto pr-1">
                <div class="mt-6 space-y-4">
                  @if (showSidebarDetails()) {
                    <p class="px-2 text-sm font-semibold text-white">Pinned</p>
                  }
                  <div class="space-y-1">
                    @for (chat of pinnedChats; track chat.label) {
                      <button
                        type="button"
                        class="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition hover:bg-white/10"
                        [title]="sidebarCollapsed() ? chat.label : ''"
                      >
                        <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-transparent text-white/85">
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                            <path d="M8 9h8"></path>
                            <path d="M8 13h5"></path>
                          </svg>
                        </span>
                        @if (showSidebarDetails()) {
                          <span class="min-w-0 truncate text-[15px] text-zinc-100">
                            {{ chat.label }}
                          </span>
                        }
                      </button>
                    }
                  </div>
                </div>
              </div>

              <div class="mt-4 border-t border-white/10 pt-4">
                <div class="flex items-center gap-3 rounded-2xl px-2 py-2">
                  <div class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-500 text-sm font-semibold text-black">
                    TA
                  </div>
                  @if (showSidebarDetails()) {
                    <div class="min-w-0">
                      <p class="truncate text-[15px] font-medium text-white">Tala User</p>
                      <p class="text-sm text-zinc-400">Free</p>
                    </div>
                  }
                </div>

                @if (showSidebarDetails()) {
                  <div class="mt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
                      (click)="toggleTheme()"
                    >
                      {{ theme() === 'dark' ? 'Light mode' : 'Dark mode' }}
                    </button>
                    <button
                      type="button"
                      class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5"
                    >
                      Upgrade
                    </button>
                  </div>
                }
              </div>
            </div>
          </aside>

          <div class="flex min-w-0 flex-1">
            <div class="flex min-w-0 flex-1 flex-col">
              <header class="z-20 border-b border-zinc-200/80 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85">
                <div class="flex w-full max-w-[1800px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
                  <div class="flex items-center gap-3">
                    <button
                      type="button"
                      class="rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-black hover:text-black lg:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
                      (click)="openMenu()"
                    >
                      Menu
                    </button>
                    <div>
                      <p class="text-sm font-semibold tracking-tight text-black dark:text-zinc-50">Tala Client</p>
                      <p class="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                        Reference pages and UI patterns
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      class="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-black hover:text-black sm:inline-flex dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                      (click)="toggleTheme()"
                    >
                      {{ theme() === 'dark' ? 'Light mode' : 'Dark mode' }}
                    </button>
                  </div>
                </div>
              </header>

              <main class="min-h-0 flex-1 overflow-y-auto w-full max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
                <router-outlet></router-outlet>
              </main>
            </div>

            <aside
              class="hidden h-full shrink-0 overflow-hidden border-l border-zinc-200/80 bg-white text-black transition-[width] duration-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 lg:flex"
              [style.width.px]="chatRailWidth()"
              aria-label="AI chat panel"
            >
              @if (chatWidgetOpen()) {
                <div class="flex h-full min-w-0 flex-1 flex-col">
                  <div class="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                    <div class="flex items-center gap-3">
                      <dot-app-icon size="sm" label="AI chat widget"></dot-app-icon>
                      <div>
                        <p class="text-sm font-semibold tracking-tight text-black dark:text-zinc-50">AI Chat</p>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">Docked at the right edge</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-black hover:text-black dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                      (click)="chatWidgetOpen.set(false)"
                      aria-label="Collapse AI chat panel"
                    >
                      Collapse
                    </button>
                  </div>

                  <div class="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                    <div class="flex min-h-full flex-col justify-end gap-4">
                      <div class="space-y-3">
                        @for (message of chatMessages; track $index) {
                          <div class="flex" [class.justify-end]="message.role === 'user'">
                            <div
                              class="max-w-[82%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm"
                              [class]="
                                message.role === 'assistant'
                                  ? 'border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'
                                  : 'border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black'
                              "
                            >
                              {{ message.text }}
                            </div>
                          </div>
                        }
                      </div>

                      <div class="flex flex-wrap gap-2">
                        @for (suggestion of chatSuggestions; track suggestion) {
                          <button
                            type="button"
                            class="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-black hover:text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                          >
                            {{ suggestion }}
                          </button>
                        }
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
                    <div class="space-y-2">
                      <label class="block">
                        <span class="sr-only">Chat prompt</span>
                        <textarea
                          rows="4"
                          class="w-full resize-none rounded-[20px] border border-zinc-300 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-black focus:ring-2 focus:ring-black/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10"
                          placeholder="Ask for a summary, next step, or a draft reply..."
                        ></textarea>
                      </label>

                      <div class="flex items-center justify-between gap-3">
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">Docked assistant for quick help.</p>
                        <button
                          type="button"
                          class="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              } @else {
                <button
                  type="button"
                  class="group flex h-full w-full items-center justify-center border-l border-zinc-200 bg-white text-black transition hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500"
                  (click)="chatWidgetOpen.set(true)"
                  aria-label="Open AI chat panel"
                >
                  <span class="grid h-12 w-12 place-items-center rounded-full border border-black bg-black text-white transition group-hover:scale-105 dark:border-zinc-200 dark:bg-zinc-100 dark:text-black">
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                      <path d="M8 9h8"></path>
                      <path d="M8 13h5"></path>
                    </svg>
                  </span>
                </button>
              }
            </aside>
          </div>

          @if (showChrome() && !chatWidgetOpen()) {
            <button
              type="button"
              class="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-[24px] border border-zinc-200 border-r-0 bg-white px-3 py-4 text-left text-black shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition hover:border-black hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500 lg:flex"
              (click)="chatWidgetOpen.set(true)"
              aria-label="Open AI chat panel"
            >
              <span class="flex items-center gap-3">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black">
                  <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h5"></path>
                  </svg>
                </span>
                <span class="flex -rotate-180 items-center gap-2 [writing-mode:vertical-rl]">
                  <span class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">AI Chat</span>
                  <span class="text-sm font-semibold text-black dark:text-zinc-50">Open</span>
                </span>
              </span>
            </button>
          }
        </div>
      } @else {
        <div class="flex min-h-screen min-w-0 flex-1 lg:h-full">
          <main class="min-h-screen min-w-0 flex-1 overflow-y-auto">
            <router-outlet></router-outlet>
          </main>

          <aside
            class="hidden h-full shrink-0 overflow-hidden border-l border-zinc-200/80 bg-white text-black transition-[width] duration-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 lg:flex"
            [style.width.px]="chatRailWidth()"
            aria-label="AI chat panel"
          >
            @if (chatWidgetOpen()) {
              <div class="flex h-full min-w-0 flex-1 flex-col">
                <div class="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                  <div class="flex items-center gap-3">
                    <dot-app-icon size="sm" label="AI chat widget"></dot-app-icon>
                    <div>
                      <p class="text-sm font-semibold tracking-tight text-black dark:text-zinc-50">AI Chat</p>
                      <p class="text-xs text-zinc-500 dark:text-zinc-400">Available on every page</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-black hover:text-black dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                    (click)="chatWidgetOpen.set(false)"
                    aria-label="Close AI chat widget"
                  >
                    Close
                  </button>
                </div>

                <div class="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                  <div class="flex min-h-full flex-col justify-end gap-4">
                    <div class="space-y-3">
                      @for (message of chatMessages; track $index) {
                        <div class="flex" [class.justify-end]="message.role === 'user'">
                          <div
                            class="max-w-[82%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm"
                            [class]="
                              message.role === 'assistant'
                                ? 'border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'
                                : 'border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black'
                            "
                          >
                            {{ message.text }}
                          </div>
                        </div>
                      }
                    </div>

                    <div class="flex flex-wrap gap-2">
                      @for (suggestion of chatSuggestions; track suggestion) {
                        <button
                          type="button"
                          class="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-black hover:text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                        >
                          {{ suggestion }}
                        </button>
                      }
                    </div>
                  </div>
                </div>

                <div class="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
                  <div class="space-y-2">
                    <label class="block">
                      <span class="sr-only">Chat prompt</span>
                      <textarea
                        rows="4"
                        class="w-full resize-none rounded-[20px] border border-zinc-300 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-black focus:ring-2 focus:ring-black/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10"
                        placeholder="Ask for a summary, next step, or a draft reply..."
                      ></textarea>
                    </label>

                    <div class="flex items-center justify-between gap-3">
                      <p class="text-xs text-zinc-500 dark:text-zinc-400">Docked assistant for quick help.</p>
                      <button
                        type="button"
                        class="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            } @else {
              <button
                type="button"
                class="group flex h-full w-full items-center justify-center border-l border-zinc-200 bg-white text-black transition hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500"
                (click)="chatWidgetOpen.set(true)"
                aria-label="Open AI chat panel"
              >
                <span class="grid h-12 w-12 place-items-center rounded-full border border-black bg-black text-white transition group-hover:scale-105 dark:border-zinc-200 dark:bg-zinc-100 dark:text-black">
                  <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h5"></path>
                  </svg>
                </span>
              </button>
            }
          </aside>
        </div>
      }

      @if (showChrome() && !chatWidgetOpen()) {
        <button
          type="button"
          class="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-[24px] border border-zinc-200 border-r-0 bg-white px-3 py-4 text-left text-black shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition hover:border-black hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500 lg:flex"
          (click)="chatWidgetOpen.set(true)"
          aria-label="Open AI chat panel"
        >
          <span class="flex items-center gap-3">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                <path d="M8 9h8"></path>
                <path d="M8 13h5"></path>
              </svg>
            </span>
            <span class="flex -rotate-180 items-center gap-2 [writing-mode:vertical-rl]">
              <span class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">AI Chat</span>
              <span class="text-sm font-semibold text-black dark:text-zinc-50">Open</span>
            </span>
          </span>
        </button>
      }

      @if (!showChrome()) {
        <div class="min-h-screen lg:grid lg:grid-cols-[minmax(0,1fr)_auto]">
          <main class="min-w-0">
            <router-outlet></router-outlet>
          </main>

          <aside
            class="hidden h-screen overflow-hidden border-l border-zinc-200/80 bg-white text-black transition-[width] duration-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 lg:flex"
            [style.width.px]="chatRailWidth()"
            aria-label="AI chat panel"
          >
            @if (chatWidgetOpen()) {
              <div class="flex h-full min-w-0 flex-1 flex-col">
                <div class="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                  <div class="flex items-center gap-3">
                    <dot-app-icon size="sm" label="AI chat widget"></dot-app-icon>
                    <div>
                      <p class="text-sm font-semibold tracking-tight text-black dark:text-zinc-50">AI Chat</p>
                      <p class="text-xs text-zinc-500 dark:text-zinc-400">Available on every page</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-black hover:text-black dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                    (click)="chatWidgetOpen.set(false)"
                    aria-label="Close AI chat widget"
                  >
                    Close
                  </button>
                </div>

                <div class="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                  <div class="flex min-h-full flex-col justify-end gap-4">
                    <div class="space-y-3">
                      @for (message of chatMessages; track $index) {
                        <div class="flex" [class.justify-end]="message.role === 'user'">
                          <div
                            class="max-w-[82%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm"
                            [class]="
                              message.role === 'assistant'
                                ? 'border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'
                                : 'border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black'
                            "
                          >
                            {{ message.text }}
                          </div>
                        </div>
                      }
                    </div>

                    <div class="flex flex-wrap gap-2">
                      @for (suggestion of chatSuggestions; track suggestion) {
                        <button
                          type="button"
                          class="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-black hover:text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                        >
                          {{ suggestion }}
                        </button>
                      }
                    </div>
                  </div>
                </div>

                <div class="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
                  <div class="space-y-2">
                    <label class="block">
                      <span class="sr-only">Chat prompt</span>
                      <textarea
                        rows="4"
                        class="w-full resize-none rounded-[20px] border border-zinc-300 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-black focus:ring-2 focus:ring-black/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10"
                        placeholder="Ask for a summary, next step, or a draft reply..."
                      ></textarea>
                    </label>

                    <div class="flex items-center justify-between gap-3">
                      <p class="text-xs text-zinc-500 dark:text-zinc-400">Docked assistant for quick help.</p>
                      <button
                        type="button"
                        class="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            } @else {
              <button
                type="button"
                class="group flex h-full w-full items-center justify-center border-l border-zinc-200 bg-white text-black transition hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500"
                (click)="chatWidgetOpen.set(true)"
                aria-label="Open AI chat panel"
              >
                <span class="grid h-12 w-12 place-items-center rounded-full border border-black bg-black text-white transition group-hover:scale-105 dark:border-zinc-200 dark:bg-zinc-100 dark:text-black">
                  <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h5"></path>
                  </svg>
                </span>
              </button>
            }
          </aside>
        </div>
      }

      <div class="fixed bottom-5 right-5 z-50 lg:hidden">
        @if (chatWidgetOpen()) {
          <div
            id="ai-chat-widget"
            class="mb-3 w-[min(92vw,24rem)] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.22)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
          >
            <div class="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <div class="flex items-center gap-3">
                <dot-app-icon size="sm" label="AI chat widget"></dot-app-icon>
                <div>
                  <p class="text-sm font-semibold tracking-tight text-black dark:text-zinc-50">AI Chat</p>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400">Available on every page</p>
                </div>
              </div>

              <button
                type="button"
                class="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-black hover:text-black dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                (click)="chatWidgetOpen.set(false)"
                aria-label="Close AI chat widget"
              >
                Close
              </button>
            </div>

            <div class="space-y-3 px-4 py-4">
              <div class="flex min-h-full flex-col justify-end gap-4">
                <div class="space-y-3">
                  @for (message of chatMessages; track $index) {
                    <div class="flex" [class.justify-end]="message.role === 'user'">
                      <div
                        class="max-w-[82%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm"
                        [class]="
                          message.role === 'assistant'
                            ? 'border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100'
                            : 'border border-black bg-black text-white dark:border-zinc-200 dark:bg-zinc-100 dark:text-black'
                        "
                      >
                        {{ message.text }}
                      </div>
                    </div>
                  }
                </div>

                <div class="flex flex-wrap gap-2">
                  @for (suggestion of chatSuggestions; track suggestion) {
                    <button
                      type="button"
                      class="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-black hover:text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
                    >
                      {{ suggestion }}
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        }

        <button
          type="button"
          class="group inline-flex items-center gap-3 rounded-full border border-black bg-black px-4 py-3 text-left text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-zinc-900 dark:border-zinc-200 dark:bg-zinc-100 dark:text-black dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] dark:hover:bg-white"
          (click)="toggleChatWidget()"
          [attr.aria-expanded]="chatWidgetOpen()"
          aria-controls="ai-chat-widget"
        >
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white dark:border-black/10 dark:bg-black/5 dark:text-black">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 18l-3 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7Z"></path>
              <path d="M8 9h8"></path>
              <path d="M8 13h5"></path>
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-semibold leading-5">AI Chat</span>
            <span class="block text-xs text-white/70 dark:text-black/65">Open assistant widget</span>
          </span>
        </button>
      </div>
    </div>
  `,
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





