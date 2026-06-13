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
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
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







