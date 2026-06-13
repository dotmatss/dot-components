import { Component, signal } from '@angular/core';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiSeparatorComponent } from '@components/dot-separator/dot-separator.component';
import { DotProfileFormComponent, DotProfileFormValue } from '@forms/dot-profile-form/dot-profile-form.component';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [UiBadgeComponent, UiCardComponent, DotProfileFormComponent, UiSeparatorComponent],
  template: `
    <section class="space-y-6">
      <div>
        <dot-badge variant="outline">Forms</dot-badge>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight">Reactive form patterns</h1>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          A reusable form area built with Angular reactive forms and the dot UI system.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <dot-card
          title="Profile form"
          description="A self-contained reactive form component for onboarding, contact, or profile flows."
        >
          <dot-profile-form (submitted)="submission.set($event)"></dot-profile-form>
        </dot-card>

        <div class="space-y-4">
          <dot-card title="What it shows" description="The form is small, but it covers the usual states.">
            <div class="space-y-3 text-sm leading-6 text-zinc-600">
              <p>- Required fields with inline validation.</p>
              <p>- A select dropdown for controlled inputs.</p>
              <p>- Checkbox consent and preference controls.</p>
              <p>- A reusable component boundary for future forms.</p>
            </div>
          </dot-card>

          <dot-card title="Last submission" description="Live output from the form component.">
            @if (submission()) {
              <div class="space-y-3 text-sm leading-6 text-zinc-600">
                <p><span class="font-semibold text-black">Name:</span> {{ submission()?.fullName }}</p>
                <p><span class="font-semibold text-black">Email:</span> {{ submission()?.email }}</p>
                <p><span class="font-semibold text-black">Role:</span> {{ submission()?.role }}</p>
                <p><span class="font-semibold text-black">Newsletter:</span> {{ submission()?.newsletter ? 'Yes' : 'No' }}</p>
                <p><span class="font-semibold text-black">Agreed:</span> {{ submission()?.agree ? 'Yes' : 'No' }}</p>
                <div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-700">
                  {{ submission()?.message }}
                </div>
              </div>
            } @else {
              <p class="text-sm leading-6 text-zinc-600">
                Submit the form to see the reactive payload appear here.
              </p>
            }
          </dot-card>
        </div>
      </div>

      <dot-separator />

      <dot-card
        title="Reusable path"
        description="This form lives under shared/forms so future product pages can import it without duplicating the markup."
      >
        <p class="text-sm leading-6 text-zinc-600">
          We can add more specialized form components here later, like settings forms, billing forms, or invite flows.
        </p>
      </dot-card>
    </section>
  `,
})
export class FormsPageComponent {
  readonly submission = signal<DotProfileFormValue | null>(null);
}


