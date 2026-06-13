import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiAppIconComponent } from '@components/dot-app-icon/dot-app-icon.component';
import { UiInputComponent } from '@components/dot-input/dot-input.component';

type AuthSectionId = 'login' | 'register' | 'forgot';
type AuthFlowIcon = 'lock' | 'spark' | 'mail';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule, UiButtonComponent, UiCardComponent, UiAppIconComponent, UiInputComponent],
  template: `
    <section class="grid gap-8 xl:grid-cols-[380px_minmax(0,1fr)]">
      <aside class="relative overflow-hidden rounded-[36px] border border-zinc-200 bg-black p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] xl:sticky xl:top-6 xl:h-fit">
        <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent"></div>

        <div class="relative space-y-8">
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <dot-app-icon size="lg" label="Tala Client auth icon"></dot-app-icon>
              <div class="space-y-1">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Auth</p>
                <h1 class="text-3xl font-semibold tracking-tight">Secure entry layouts</h1>
              </div>
            </div>

            <p class="max-w-sm text-sm leading-7 text-zinc-300">
              A monochrome reference for login, registration, and recovery flows with a clearer desktop hierarchy.
            </p>
          </div>

          <div class="space-y-3">
            @for (flow of authFlows; track flow.id) {
              <button
                type="button"
                [class]="flowButtonClass(selected() === flow.id)"
                (click)="focusSection(flow.id)"
              >
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/30 text-white/90">
                  @switch (flow.icon) {
                    @case ('lock') {
                      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M7 11V8a5 5 0 0 1 10 0v3"></path>
                        <path d="M6 11h12v9H6z"></path>
                        <path d="M12 15v2"></path>
                      </svg>
                    }
                    @case ('spark') {
                      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z"></path>
                      </svg>
                    }
                    @case ('mail') {
                      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M4 6h16v12H4z"></path>
                        <path d="m4 7 8 6 8-6"></path>
                      </svg>
                    }
                  }
                </span>

                <span class="min-w-0">
                  <span class="block text-[15px] font-semibold tracking-tight">{{ flow.label }}</span>
                  <span class="mt-0.5 block text-sm leading-6 text-current/75">{{ flow.description }}</span>
                </span>
              </button>
            }
          </div>

          <div class="grid gap-3 rounded-[28px] border border-white/10 bg-white/5 p-4">
            <div class="flex items-start gap-3">
              <span class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 11V8a5 5 0 0 1 10 0v3"></path>
                  <path d="M6 11h12v9H6z"></path>
                </svg>
              </span>
              <div>
                <p class="text-sm font-semibold text-white">Protected handoff</p>
                <p class="text-sm leading-6 text-zinc-400">Use the login flow for returning users and keep recovery one step away.</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z"></path>
                </svg>
              </span>
              <div>
                <p class="text-sm font-semibold text-white">Fast onboarding</p>
                <p class="text-sm leading-6 text-zinc-400">Keep registration compact so the page stays usable on mobile and desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div class="space-y-6">
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section id="login" class="scroll-mt-6">
            <dot-card title="Login" description="Email and password sign-in for returning users.">
              <div class="mb-5 flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-zinc-200 bg-white text-black">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 11V8a5 5 0 0 1 10 0v3"></path>
                    <path d="M6 11h12v9H6z"></path>
                    <path d="M12 15v2"></path>
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-black">Secure sign in</p>
                  <p class="text-sm leading-6 text-zinc-600">Keep the form compact and place recovery just one click away.</p>
                </div>
              </div>

              <form [formGroup]="loginForm" class="grid gap-4">
                <dot-input label="Email" type="email" placeholder="you@example.com"></dot-input>
                <dot-input label="Password" type="password" placeholder="Enter your password"></dot-input>
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-black"
                    (click)="focusSection('forgot')"
                  >
                    <span>Forgot password?</span>
                    <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M5 10h10"></path>
                      <path d="m11 6 4 4-4 4"></path>
                    </svg>
                  </button>
                  <dot-button variant="solid">
                    <span class="inline-flex items-center gap-2">
                      <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M5 10h10"></path>
                        <path d="m11 6 4 4-4 4"></path>
                      </svg>
                      <span>Login</span>
                    </span>
                  </dot-button>
                </div>
                <dot-button variant="outline" className="w-full" type="button">
                  <span class="inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3a9 9 0 0 0 2.8-7.1Z"></path>
                      <path d="M12 22a9.8 9.8 0 0 0 6.8-2.5"></path>
                      <path d="M12 2a9.8 9.8 0 0 0-6.8 2.5"></path>
                    </svg>
                    <span>Continue with Google</span>
                  </span>
                </dot-button>
              </form>
            </dot-card>
          </section>

          <section id="register" class="scroll-mt-6">
            <dot-card title="Register" description="Create a new account with a simple onboarding flow.">
              <div class="mb-5 flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-zinc-200 bg-white text-black">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z"></path>
                    <path d="M6 19c1.8-2.1 4.1-3.2 6-3.2s4.2 1.1 6 3.2"></path>
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-black">Low-friction signup</p>
                  <p class="text-sm leading-6 text-zinc-600">Use a short form here and move any extra steps to the next screen.</p>
                </div>
              </div>

              <form [formGroup]="registerForm" class="grid gap-4">
                <div class="grid gap-4 lg:grid-cols-2">
                  <dot-input label="First name" placeholder="Jane"></dot-input>
                  <dot-input label="Last name" placeholder="Doe"></dot-input>
                </div>
                <dot-input label="Email" type="email" placeholder="you@example.com"></dot-input>
                <dot-input label="Password" type="password" placeholder="Create a password"></dot-input>
                <dot-button variant="solid">
                  <span class="inline-flex items-center gap-2">
                    <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M5 10h10"></path>
                      <path d="m11 6 4 4-4 4"></path>
                    </svg>
                    <span>Create account</span>
                  </span>
                </dot-button>
              </form>
            </dot-card>
          </section>
        </div>

        <section id="forgot" class="scroll-mt-6">
          <dot-card title="Forgot password" description="Keep recovery focused on a single email handoff.">
            <div class="mb-5 flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-zinc-200 bg-white text-black">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 6h16v12H4z"></path>
                  <path d="m4 7 8 6 8-6"></path>
                </svg>
              </span>
              <div>
                <p class="text-sm font-semibold text-black">Reset link flow</p>
                <p class="text-sm leading-6 text-zinc-600">A minimal recovery path keeps the page readable and easy to scan.</p>
              </div>
            </div>

            <form [formGroup]="resetForm" class="grid gap-4 sm:max-w-md">
              <dot-input label="Email" type="email" placeholder="you@example.com"></dot-input>
              <dot-button variant="outline">
                <span class="inline-flex items-center gap-2">
                  <svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 10h10"></path>
                    <path d="m11 6 4 4-4 4"></path>
                  </svg>
                  <span>Send reset link</span>
                </span>
              </dot-button>
            </form>
          </dot-card>
        </section>
      </div>
    </section>
  `,
})
export class AuthPageComponent {
  private readonly document = inject(DOCUMENT);
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly selected = signal<AuthSectionId>('login');

  readonly authFlows: Array<{ id: AuthSectionId; label: string; description: string; icon: AuthFlowIcon }> = [
    { id: 'login', label: 'Login', description: 'Returning users and fast access.', icon: 'lock' },
    { id: 'register', label: 'Register', description: 'New accounts and onboarding.', icon: 'spark' },
    { id: 'forgot', label: 'Forgot password', description: 'Recovery and reset handoff.', icon: 'mail' },
  ];

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  readonly registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  readonly resetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  focusSection(sectionId: AuthSectionId): void {
    this.selected.set(sectionId);
    this.document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  flowButtonClass(active: boolean): string {
    return [
      'flex w-full items-center gap-3 rounded-[22px] border px-4 py-3 text-left transition',
      active ? 'border-white/20 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10',
    ].join(' ');
  }
}






