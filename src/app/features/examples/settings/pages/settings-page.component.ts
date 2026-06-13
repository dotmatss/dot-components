import { Component } from '@angular/core';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiCheckboxComponent } from '@components/dot-checkbox/dot-checkbox.component';
import { UiRadioGroupComponent } from '@components/dot-radio-group/dot-radio-group.component';
import { UiSelectComponent } from '@components/dot-select/dot-select.component';
import { UiToggleComponent } from '@components/dot-toggle/dot-toggle.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [UiBadgeComponent, UiButtonComponent, UiCardComponent, UiCheckboxComponent, UiRadioGroupComponent, UiSelectComponent, UiToggleComponent],
  template: `
    <section class="space-y-6">
      <div>
        <dot-badge variant="outline">Settings</dot-badge>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight">Settings and preferences layout</h1>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          A reference for account settings, team preferences, and app configuration.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <dot-card title="Sections" description="A simple side navigation for settings pages.">
          <div class="space-y-2">
            <button type="button" class="block w-full rounded-2xl border border-black bg-black px-4 py-3 text-left text-sm font-semibold text-white">Account</button>
            <button type="button" class="block w-full rounded-2xl border border-zinc-200 px-4 py-3 text-left text-sm font-medium text-zinc-700">Notifications</button>
            <button type="button" class="block w-full rounded-2xl border border-zinc-200 px-4 py-3 text-left text-sm font-medium text-zinc-700">Security</button>
            <button type="button" class="block w-full rounded-2xl border border-zinc-200 px-4 py-3 text-left text-sm font-medium text-zinc-700">Billing</button>
          </div>
        </dot-card>

        <div class="space-y-6">
          <dot-card title="Account preferences" description="Common controls used in settings pages.">
            <div class="grid gap-4 lg:grid-cols-2">
              <dot-select
                label="Theme"
                placeholder="Choose theme"
                [options]="[
                  { label: 'System', value: 'system' },
                  { label: 'Light', value: 'light' },
                  { label: 'Dark', value: 'dark' }
                ]"
              ></dot-select>

              <dot-select
                label="Language"
                placeholder="Choose language"
                [options]="[
                  { label: 'English', value: 'en' },
                  { label: 'Spanish', value: 'es' },
                  { label: 'Japanese', value: 'ja' }
                ]"
              ></dot-select>

              <div class="space-y-3">
                <p class="text-sm font-semibold text-black">Email alerts</p>
                <div class="space-y-3 rounded-[28px] border border-zinc-200 bg-zinc-50 p-4">
                  <dot-checkbox label="Product updates"></dot-checkbox>
                  <dot-checkbox label="Weekly summary"></dot-checkbox>
                  <dot-checkbox label="Security alerts"></dot-checkbox>
                </div>
              </div>

              <div class="space-y-3">
                <p class="text-sm font-semibold text-black">Auto save</p>
                <div class="space-y-4 rounded-[28px] border border-zinc-200 bg-zinc-50 p-4">
                  <div class="flex items-center justify-between gap-4">
                    <span class="text-sm text-zinc-700">Enable auto save</span>
                    <dot-toggle [on]="true"></dot-toggle>
                  </div>
                  <div class="flex items-center justify-between gap-4">
                    <span class="text-sm text-zinc-700">Compact layout</span>
                    <dot-toggle [on]="false"></dot-toggle>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-2">
                <dot-radio-group
                  label="Notification frequency"
                  [options]="[
                    { label: 'Real time', value: 'realtime', description: 'Best for support and alerts.' },
                    { label: 'Daily', value: 'daily', description: 'Balanced for busy teams.' },
                    { label: 'Weekly', value: 'weekly', description: 'Best for summaries.' }
                  ]"
                  [selected]="'daily'"
                  (selectedChange)="$event"
                ></dot-radio-group>
              </div>
            </div>
          </dot-card>

          <dot-card title="Danger zone" description="A strong destructive area for account management.">
            <div class="rounded-[28px] border border-red-200 bg-red-50 p-5">
              <p class="text-sm font-semibold text-red-700">Delete account</p>
              <p class="mt-1 text-sm leading-6 text-red-700/80">
                This action is permanent and should be isolated from normal settings controls.
              </p>
              <div class="mt-4 flex justify-end">
                <dot-button variant="outline" size="sm">Delete account</dot-button>
              </div>
            </div>
          </dot-card>
        </div>
      </div>
    </section>
  `,
})
export class SettingsPageComponent {}






