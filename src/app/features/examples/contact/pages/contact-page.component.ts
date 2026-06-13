import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiInputComponent } from '@components/dot-input/dot-input.component';
import { UiTextareaComponent } from '@components/dot-textarea/dot-textarea.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, UiBadgeComponent, UiButtonComponent, UiCardComponent, UiInputComponent, UiTextareaComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
}







