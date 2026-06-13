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
  template: `
    <section class="space-y-6">
      <div>
        <dot-badge variant="outline">Contact</dot-badge>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight">Contact page with multiple sections</h1>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          A contact reference with hero text, cards, support details, and a form.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1fr_420px]">
        <dot-card title="Get in touch" description="A clean contact form for service or product sites.">
          <form [formGroup]="form" class="grid gap-4">
            <div class="grid gap-4 lg:grid-cols-2">
              <dot-input label="First name" placeholder="Jane"></dot-input>
              <dot-input label="Last name" placeholder="Doe"></dot-input>
            </div>
            <dot-input label="Email" type="email" placeholder="jane@example.com"></dot-input>
            <dot-input label="Subject" placeholder="How can we help?"></dot-input>
            <dot-textarea label="Message" placeholder="Write your message here..."></dot-textarea>
            <div class="flex justify-end">
              <dot-button type="submit" variant="solid">Send message</dot-button>
            </div>
          </form>
        </dot-card>

        <div class="space-y-4">
          <dot-card title="Support details" description="Useful contact channels for a help section.">
            <div class="space-y-4 text-sm leading-6 text-zinc-600">
              <p><span class="font-semibold text-black">Email:</span> support&#64;example.com</p>
              <p><span class="font-semibold text-black">Phone:</span> +1 (555) 123-4567</p>
              <p><span class="font-semibold text-black">Hours:</span> Mon to Fri, 9am to 6pm</p>
            </div>
          </dot-card>

          <dot-card title="Office locations" description="A second section for larger contact pages.">
            <div class="space-y-3 text-sm leading-6 text-zinc-600">
              <p>New York - 123 Main Street</p>
              <p>Singapore - 45 Orchard Road</p>
              <p>Remote-first support team</p>
            </div>
          </dot-card>
        </div>
      </div>
    </section>
  `,
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






