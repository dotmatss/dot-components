import { Component } from '@angular/core';
import { UiAvatarComponent } from '@components/dot-avatar/dot-avatar.component';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiChipComponent } from '@components/dot-chip/dot-chip.component';
import { UiProgressComponent } from '@components/dot-progress/dot-progress.component';
import { UiSeparatorComponent } from '@components/dot-separator/dot-separator.component';
import { UiStatCardComponent } from '@components/dot-stat-card/dot-stat-card.component';

@Component({
  selector: 'app-gradient-page',
  standalone: true,
  imports: [
    UiAvatarComponent,
    UiBadgeComponent,
    UiButtonComponent,
    UiChipComponent,
    UiProgressComponent,
    UiSeparatorComponent,
    UiStatCardComponent,
  ],
  template: `
    <section class="space-y-8">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="space-y-3">
          <dot-badge variant="outline">Gradient Screens</dot-badge>
          <div class="space-y-2">
            <h1 class="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">Gradient screen reference</h1>
            <p class="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              A collection of reusable screen-style layouts with subtle monochrome gradients and layered surfaces.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <dot-button variant="solid">Use screen</dot-button>
          <dot-button variant="outline">Copy palette</dot-button>
        </div>
      </div>

      <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        @for (stat of stats; track stat.label) {
          <dot-stat-card [label]="stat.label" [value]="stat.value" [trend]="stat.trend"></dot-stat-card>
        }
      </section>

      <!-- 01. Gradient variants -->
      <section class="space-y-4">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Gradient variants</p>
            <p class="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Twelve black-and-white treatments with different directions, overlays, and contrast levels.
            </p>
          </div>
          <span class="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            12 variants
          </span>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          @for (variant of gradientVariants; track variant.title) {
            <div [class]="variant.className">
              <div class="flex h-full min-h-56 flex-col justify-between rounded-[32px] border border-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{{ variant.eyebrow }}</p>
                    <p class="mt-2 text-2xl font-semibold tracking-tight text-white">{{ variant.title }}</p>
                  </div>
                  <span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {{ variant.tag }}
                  </span>
                </div>

                <div class="mt-8 grid gap-3 sm:grid-cols-2">
                  <div class="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Use</p>
                    <p class="mt-2 text-sm leading-6 text-white/80">{{ variant.use }}</p>
                  </div>
                  <div class="rounded-[24px] border border-white/10 bg-black/20 p-4 backdrop-blur">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Mood</p>
                    <p class="mt-2 text-sm leading-6 text-white/80">{{ variant.mood }}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- 02. Hero -->
      <section class="overflow-hidden rounded-[40px] border border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),_transparent_38%),linear-gradient(135deg,#0a0a0a_0%,#1f1f1f_45%,#fafafa_145%)] p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] lg:p-10">
        <div class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <dot-badge variant="outline">Hero screen</dot-badge>
              <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                Layered glow
              </span>
            </div>
            <div class="space-y-4">
              <h2 class="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A dramatic gradient hero for launch or portfolio pages.
              </h2>
              <p class="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                This screen uses a soft highlight on top of a dark-to-light diagonal gradient to create depth without leaving the monochrome system.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <dot-button variant="solid">Primary action</dot-button>
              <dot-button variant="outline">Secondary action</dot-button>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-[30px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Highlight</p>
              <p class="mt-3 text-2xl font-semibold">01</p>
              <p class="mt-2 text-sm leading-6 text-white/70">A bright inset surface keeps the card readable.</p>
            </div>
            <div class="rounded-[30px] border border-white/10 bg-black/30 p-5 backdrop-blur">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Depth</p>
              <p class="mt-3 text-2xl font-semibold">02</p>
              <p class="mt-2 text-sm leading-6 text-white/70">Use translucent panels to layer content.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 03. Feature gradient cards -->
      <section class="grid gap-6 lg:grid-cols-3">
        @for (feature of features; track feature.title) {
          <div class="rounded-[32px] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,244,245,0.92))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-[linear-gradient(180deg,rgba(24,24,27,0.96),rgba(9,9,11,0.92))]">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">{{ feature.eyebrow }}</p>
            <p class="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">{{ feature.title }}</p>
            <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{{ feature.body }}</p>
          </div>
        }
      </section>

      <!-- 04. Analytics screen -->
      <section class="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div class="rounded-[36px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Analytics screen</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">Gradient dashboard preview</h2>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            This layout keeps the chart area neutral and lets the title strip carry the color story.
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            @for (metric of metrics; track metric.label) {
              <div class="rounded-3xl border border-zinc-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4f4f5_100%)] p-4 dark:border-zinc-800 dark:bg-[linear-gradient(180deg,#18181b_0%,#09090b_100%)]">
                <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ metric.label }}</p>
                <p class="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">{{ metric.value }}</p>
              </div>
            }
          </div>
        </div>

        <div class="rounded-[36px] border border-zinc-200 bg-[linear-gradient(145deg,#111111_0%,#27272a_45%,#f4f4f5_120%)] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Signal bars</p>
          <div class="mt-6 space-y-4">
            @for (item of progress; track item.label) {
              <dot-progress [label]="item.label" [value]="item.value"></dot-progress>
            }
          </div>
        </div>
      </section>

      <!-- 05. Tools screen -->
      <section class="grid gap-4 xl:grid-cols-4">
        @for (tool of tools; track tool.label) {
          <div class="rounded-[30px] border border-zinc-200 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),_transparent_55%),linear-gradient(180deg,#ffffff_0%,#f4f4f5_100%)] p-5 dark:border-zinc-800 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%),linear-gradient(180deg,#18181b_0%,#09090b_100%)]">
            <div class="flex items-center gap-4">
              <div class="grid h-12 w-12 place-items-center rounded-2xl border border-zinc-200 bg-white text-black dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50">
                @switch (tool.icon) {
                  @case ('spark') {
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"></path>
                    </svg>
                  }
                  @case ('search') {
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="6"></circle>
                      <path d="M20 20l-3.5-3.5"></path>
                    </svg>
                  }
                  @case ('grid') {
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                      <path d="M5 5h5v5H5z"></path>
                      <path d="M14 5h5v5h-5z"></path>
                      <path d="M5 14h5v5H5z"></path>
                      <path d="M14 14h5v5h-5z"></path>
                    </svg>
                  }
                  @case ('folder') {
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path>
                    </svg>
                  }
                }
              </div>
              <div>
                <p class="font-semibold text-black dark:text-zinc-50">{{ tool.label }}</p>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ tool.description }}</p>
              </div>
            </div>
          </div>
        }
      </section>

      <!-- 06. Contact gradient -->
      <section class="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div class="rounded-[36px] border border-zinc-200 bg-[linear-gradient(135deg,#fafafa_0%,#e4e4e7_55%,#ffffff_100%)] p-6 dark:border-zinc-800 dark:bg-[linear-gradient(135deg,#18181b_0%,#09090b_55%,#27272a_100%)]">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Contact screen</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">A softer panel for support or lead capture.</h2>
          <p class="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            This works well when you need a calmer surface with a subtle gradient glow behind the content.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            @for (tag of tags; track tag) {
              <dot-chip [selected]="true">{{ tag }}</dot-chip>
            }
          </div>
        </div>

        <div class="rounded-[36px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div class="space-y-4">
            @for (person of people; track person.name) {
              <div class="flex items-center justify-between gap-4 rounded-[28px] border border-zinc-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4f4f5_100%)] px-4 py-3 dark:border-zinc-800 dark:bg-[linear-gradient(180deg,#18181b_0%,#09090b_100%)]">
                <div class="flex items-center gap-3">
                  <dot-avatar [name]="person.name"></dot-avatar>
                  <div>
                    <p class="font-semibold text-black dark:text-zinc-50">{{ person.name }}</p>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ person.role }}</p>
                  </div>
                </div>
                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{{ person.state }}</span>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- 07. Footer CTA -->
      <section class="rounded-[40px] border border-zinc-200 bg-[linear-gradient(135deg,#0a0a0a_0%,#1f1f1f_50%,#fafafa_135%)] p-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.2)] lg:p-10">
        <div class="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Final screen</p>
            <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">A closing gradient block for conversion.</h2>
            <p class="max-w-2xl text-sm leading-6 text-white/75">
              Use this style at the bottom of a landing page, campaign page, or product announcement.
            </p>
          </div>
          <div class="flex flex-wrap gap-3 xl:justify-end">
            <dot-button variant="solid">Start now</dot-button>
            <dot-button variant="outline">View details</dot-button>
          </div>
        </div>
      </section>

      <dot-separator />
    </section>
  `,
})
export class GradientPageComponent {
  readonly stats = [
    { label: 'Screens', value: '6', trend: 'gradient layouts' },
    { label: 'Styles', value: 'Monochrome', trend: 'soft accents only' },
    { label: 'Depth', value: 'Layered', trend: 'cards and overlays' },
    { label: 'Use cases', value: 'Marketing', trend: 'landing, auth, contact' },
  ];

  readonly gradientVariants = [
    {
      eyebrow: 'Variant 01',
      title: 'Midnight Fade',
      tag: 'Hero',
      use: 'Best for the first scroll section.',
      mood: 'High contrast with a crisp glow.',
      className: 'rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_35%),linear-gradient(135deg,#050505_0%,#111111_48%,#f4f4f5_140%)]',
    },
    {
      eyebrow: 'Variant 02',
      title: 'Soft Smoke',
      tag: 'Card',
      use: 'Great for supporting content blocks.',
      mood: 'Calm, airy, and slightly foggy.',
      className: 'rounded-[36px] bg-[linear-gradient(180deg,#ffffff_0%,#e5e7eb_55%,#0f0f10_145%)]',
    },
    {
      eyebrow: 'Variant 03',
      title: 'Diagonal Shift',
      tag: 'Panel',
      use: 'Works well for split layouts.',
      mood: 'A sharp edge across the surface.',
      className: 'rounded-[36px] bg-[linear-gradient(135deg,#090909_0%,#2a2a2a_40%,#fafafa_135%)]',
    },
    {
      eyebrow: 'Variant 04',
      title: 'Halo Center',
      tag: 'Spotlight',
      use: 'Use when one idea should pull focus.',
      mood: 'Strong center glow with dark edges.',
      className: 'rounded-[36px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_rgba(255,255,255,0.02)_32%,_rgba(0,0,0,0.95)_72%),linear-gradient(180deg,#111111_0%,#050505_100%)]',
    },
    {
      eyebrow: 'Variant 05',
      title: 'Paper Black',
      tag: 'Editorial',
      use: 'Useful for content-heavy screens.',
      mood: 'Soft paper texture with dark anchors.',
      className: 'rounded-[36px] bg-[linear-gradient(180deg,#fafafa_0%,#f4f4f5_35%,#09090b_135%)]',
    },
    {
      eyebrow: 'Variant 06',
      title: 'Carbon Edge',
      tag: 'Footer',
      use: 'A strong closing or CTA block.',
      mood: 'Dense, grounded, and confident.',
      className: 'rounded-[36px] bg-[linear-gradient(145deg,#000000_0%,#1f1f1f_52%,#f5f5f5_150%)]',
    },
    {
      eyebrow: 'Variant 07',
      title: 'White Drift',
      tag: 'Utility',
      use: 'Good for settings or utility pages.',
      mood: 'Bright with a barely-there shadow.',
      className: 'rounded-[36px] bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),_transparent_30%),linear-gradient(180deg,#ffffff_0%,#f4f4f5_100%)]',
    },
    {
      eyebrow: 'Variant 08',
      title: 'Storm Layer',
      tag: 'Dashboard',
      use: 'Makes metrics and charts feel heavier.',
      mood: 'Steel-like and structured.',
      className: 'rounded-[36px] bg-[linear-gradient(120deg,#111111_0%,#3f3f46_45%,#fafafa_150%)]',
    },
    {
      eyebrow: 'Variant 09',
      title: 'Inverse Light',
      tag: 'Section',
      use: 'Great when you want a soft reset in rhythm.',
      mood: 'Mostly light with a strong dark base.',
      className: 'rounded-[36px] bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_38%,#171717_130%)]',
    },
    {
      eyebrow: 'Variant 10',
      title: 'Ink Wash',
      tag: 'Article',
      use: 'Ideal for storytelling and editorial layouts.',
      mood: 'Fluid and slightly atmospheric.',
      className: 'rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_34%),linear-gradient(160deg,#090909_0%,#222222_48%,#ededed_140%)]',
    },
    {
      eyebrow: 'Variant 11',
      title: 'Chrome Fade',
      tag: 'Banner',
      use: 'Useful for top-of-page announcements.',
      mood: 'A polished metallic grayscale blend.',
      className: 'rounded-[36px] bg-[linear-gradient(135deg,#f9fafb_0%,#d4d4d8_34%,#18181b_100%)]',
    },
    {
      eyebrow: 'Variant 12',
      title: 'Deep Overlay',
      tag: 'CTA',
      use: 'Use for the final action section.',
      mood: 'Dark first, with a bright finish.',
      className: 'rounded-[36px] bg-[linear-gradient(135deg,#040404_0%,#141414_55%,#ffffff_155%)]',
    },
  ];

  readonly features = [
    {
      eyebrow: 'Surface 01',
      title: 'Hero',
      body: 'A strong top-of-page statement with a clear contrast gradient.',
    },
    {
      eyebrow: 'Surface 02',
      title: 'Content cards',
      body: 'Simple cards with soft fades for feature storytelling.',
    },
    {
      eyebrow: 'Surface 03',
      title: 'Dashboard',
      body: 'Neutral chart panels with gradient emphasis bars.',
    },
  ];

  readonly metrics = [
    { label: 'Reach', value: '28.4k' },
    { label: 'CTR', value: '7.8%' },
    { label: 'Leads', value: '1.1k' },
  ];

  readonly progress = [
    { label: 'Awareness', value: 82 },
    { label: 'Engagement', value: 64 },
    { label: 'Conversion', value: 51 },
  ];

  readonly tools = [
    { icon: 'spark' as const, label: 'Glow', description: 'Soft highlights and depth.' },
    { icon: 'search' as const, label: 'Focus', description: 'Keep the important copy centered.' },
    { icon: 'grid' as const, label: 'System', description: 'Reusable layouts with rhythm.' },
    { icon: 'folder' as const, label: 'Library', description: 'A place for every pattern.' },
  ];

  readonly tags = ['Support', 'Sales', 'Onboarding', 'Lead capture'];

  readonly people = [
    { name: 'Ava Chen', role: 'Designer', state: 'Live' },
    { name: 'Noah Kim', role: 'Engineer', state: 'Online' },
    { name: 'Sally Smith', role: 'Support', state: 'Ready' },
  ];
}






