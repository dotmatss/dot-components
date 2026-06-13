import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgClass, RouterLink],
  template: `
    <section class="relative min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_26%),radial-gradient(circle_at_80%_0%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,#050505_0%,#090909_40%,#050505_100%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]"></div>

      <div class="relative mx-auto max-w-[1680px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
        <header class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <nav class="flex flex-wrap items-center gap-4 text-[17px]">
            @for (item of navItems; track item.label) {
              <a
                [routerLink]="item.href"
                class="rounded-full px-4 py-2 font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
                [class.text-white]="item.active"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          <div class="flex items-center gap-3">
            <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <span class="text-sm font-medium text-white">Neutral</span>
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>

            <button
              type="button"
              class="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Copy layout"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="11" height="11" rx="2"></rect>
                <rect x="4" y="4" width="11" height="11" rx="2"></rect>
              </svg>
            </button>
          </div>
        </header>

        <main class="mt-8 space-y-8">
          <section
            id="overview"
            class="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-sm lg:p-8"
          >
            <div class="grid gap-8 xl:grid-cols-[1.12fr_0.88fr] xl:items-center">
              <div class="space-y-6">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                    Landing page
                  </span>
                  <span class="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                    Mono system
                  </span>
                </div>

                <div class="space-y-4">
                  <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    A landing page that reads like a reusable UI kit.
                  </h1>
                  <p class="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                    This home screen now introduces the system, previews the component gallery, and adds a few more section templates for future product pages.
                  </p>
                </div>

                <div class="flex flex-wrap gap-3">
                  <a
                    href="#gallery"
                    class="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    Browse gallery
                  </a>
                  <a
                    routerLink="/components"
                    class="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Open component browser
                  </a>
                  <a
                    href="#templates"
                    class="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                  >
                    Jump to templates
                  </a>
                </div>
              </div>

              <div class="space-y-4">
                <div class="rounded-[28px] border border-white/10 bg-[#111111] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Page status</p>
                      <h2 class="mt-3 text-2xl font-semibold text-white">Expanded reference</h2>
                    </div>
                    <span class="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </span>
                  </div>

                  <div class="mt-5 grid gap-3 sm:grid-cols-3">
                    @for (metric of heroStats; track metric.label) {
                      <div class="rounded-3xl border border-white/10 bg-black/30 p-4">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{{ metric.label }}</p>
                        <p class="mt-3 text-2xl font-semibold text-white">{{ metric.value }}</p>
                        <p class="mt-2 text-sm leading-6 text-zinc-400">{{ metric.description }}</p>
                      </div>
                    }
                  </div>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                  <div class="flex items-center justify-between gap-4">
                    <div>
                      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Quick routes</p>
                      <p class="mt-2 text-lg font-semibold text-white">Jump straight into the other reference pages.</p>
                    </div>
                    <svg viewBox="0 0 24 24" class="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>

                  <div class="mt-4 grid gap-3 sm:grid-cols-2">
                    @for (route of quickRoutes; track route.label) {
                      <a
                        [routerLink]="route.href"
                        class="rounded-2xl border border-white/10 bg-[#121212] p-4 transition hover:border-white/20 hover:bg-white/5"
                      >
                        <p class="text-sm font-semibold text-white">{{ route.label }}</p>
                        <p class="mt-1 text-sm leading-6 text-zinc-400">{{ route.description }}</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            @for (card of featureCards; track card.title) {
              <a
                [routerLink]="card.href"
                class="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{{ card.eyebrow }}</p>
                <p class="mt-3 text-xl font-semibold tracking-tight text-white">{{ card.title }}</p>
                <p class="mt-2 text-sm leading-6 text-zinc-400">{{ card.description }}</p>
                <div class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  Explore
                  <span aria-hidden="true" class="transition group-hover:translate-x-0.5">-&gt;</span>
                </div>
              </a>
            }
          </section>

          <section id="gallery" class="space-y-4">
            <div class="flex flex-wrap items-end justify-between gap-4">
              <div class="space-y-2">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Gallery</p>
                <h2 class="text-2xl font-semibold tracking-tight text-white">Core examples and supporting states</h2>
                <p class="max-w-2xl text-sm leading-6 text-zinc-400">
                  The original payment, team, sync, and security surfaces are still here, but they now sit inside a broader landing flow.
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                @for (state of syncStates; track state.label) {
                  <span
                    class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
                    [ngClass]="state.active ? ['border-white/20', 'bg-white', 'text-black'] : ['border-white/10', 'bg-transparent', 'text-zinc-200']"
                  >
                    <span class="h-3 w-3 rounded-full border border-current border-r-transparent" [class.animate-spin]="state.spinning"></span>
                    {{ state.label }}
                  </span>
                }
              </div>
            </div>

            <section class="grid gap-6 xl:grid-cols-[390px_1fr_390px]">
              <section class="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-sm">
                <div class="space-y-6">
                  <div>
                    <h2 class="text-2xl font-semibold text-white">Payment Method</h2>
                    <p class="mt-2 max-w-xs text-[15px] leading-6 text-zinc-400">
                      All transactions are secure and encrypted
                    </p>
                  </div>

                  <div class="space-y-5">
                    <label class="block space-y-2">
                      <span class="text-[15px] font-semibold text-white">Name on Card</span>
                      <input
                        type="text"
                        value="John Doe"
                        class="w-full rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-[15px] text-zinc-200 outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                      />
                    </label>

                    <div class="grid gap-4 sm:grid-cols-[1fr_96px]">
                      <label class="block space-y-2">
                        <span class="text-[15px] font-semibold text-white">Card Number</span>
                        <input
                          type="text"
                          value="1234 5678 9012 3456"
                          class="w-full rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-[15px] text-zinc-200 outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                        />
                      </label>
                      <label class="block space-y-2">
                        <span class="text-[15px] font-semibold text-white">CVV</span>
                        <input
                          type="text"
                          value="123"
                          class="w-full rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-[15px] text-zinc-200 outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                        />
                      </label>
                    </div>

                    <p class="max-w-xs text-[15px] leading-6 text-zinc-400">
                      Enter your 16-digit number.
                    </p>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <label class="block space-y-2">
                        <span class="text-[15px] font-semibold text-white">Month</span>
                        <div class="relative">
                          <select class="w-full appearance-none rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-[15px] text-zinc-200 outline-none transition focus:border-white/30">
                            <option>MM</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                          </select>
                          <svg viewBox="0 0 24 24" class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </div>
                      </label>
                      <label class="block space-y-2">
                        <span class="text-[15px] font-semibold text-white">Year</span>
                        <div class="relative">
                          <select class="w-full appearance-none rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-[15px] text-zinc-200 outline-none transition focus:border-white/30">
                            <option>YYYY</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                          </select>
                          <svg viewBox="0 0 24 24" class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div class="h-px bg-white/10"></div>

                  <div class="space-y-5">
                    <div>
                      <h2 class="text-xl font-semibold text-white">Billing Address</h2>
                      <p class="mt-2 max-w-xs text-[15px] leading-6 text-zinc-400">
                        The billing address associated with your payment method
                      </p>
                    </div>

                    <label class="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#151515] px-4 py-3.5">
                      <input type="checkbox" checked class="mt-1 h-4 w-4 rounded border-white/25 bg-transparent text-white focus:ring-white/20" />
                      <span class="text-[15px] font-medium text-white">Same as shipping address</span>
                    </label>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <div class="rounded-2xl border border-white/10 bg-[#151515] p-4">
                        <p class="text-sm text-zinc-500">Country</p>
                        <p class="mt-2 text-[15px] font-medium text-white">United States</p>
                      </div>
                      <div class="rounded-2xl border border-white/10 bg-[#151515] p-4">
                        <p class="text-sm text-zinc-500">ZIP</p>
                        <p class="mt-2 text-[15px] font-medium text-white">10001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="space-y-6">
                <div class="rounded-[28px] border border-dashed border-white/12 bg-white/[0.025] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
                  <div class="mx-auto max-w-xl text-center">
                    <div class="mx-auto flex w-fit items-center -space-x-3">
                      @for (member of teamAvatars; track member.label) {
                        <div
                          class="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-[linear-gradient(180deg,#2b2b2b_0%,#111111_100%)] text-[11px] font-semibold text-white shadow-lg"
                          [title]="member.label"
                        >
                          {{ member.initials }}
                        </div>
                      }
                    </div>

                    <h2 class="mt-6 text-3xl font-semibold text-white">No Team Members</h2>
                    <p class="mx-auto mt-4 max-w-md text-[15px] leading-7 text-zinc-400">
                      Invite your team to collaborate on this project.
                    </p>

                    <button
                      type="button"
                      class="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                      <span class="text-lg leading-none">+</span>
                      Invite Members
                    </button>
                  </div>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
                  <div class="flex items-center gap-3 rounded-[22px] border border-white/10 bg-[#151515] px-4 py-3">
                    <div class="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-xs font-semibold text-zinc-300">i</div>
                    <span class="text-[15px] font-medium text-zinc-400">https://</span>
                    <div class="ml-auto text-zinc-500">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 5v14"></path>
                        <path d="m5 12 7 7 7-7"></path>
                      </svg>
                    </div>
                    <div class="ml-2 text-zinc-400">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2l2.7 5.5 6 0.9-4.3 4.1 1 5.9L12 15.8 6.6 18.4l1-5.9-4.3-4.1 6-.9z"></path>
                      </svg>
                    </div>
                  </div>

                  <div class="mt-4 rounded-[22px] border border-white/10 bg-[#151515] p-4">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <h3 class="text-lg font-semibold text-white">Two-factor authentication</h3>
                        <p class="mt-1 text-[15px] leading-6 text-zinc-400">Verify via email or phone number.</p>
                      </div>
                      <button type="button" class="rounded-xl bg-zinc-200 px-4 py-2 text-sm font-semibold text-black">Enable</button>
                    </div>
                  </div>

                  <div class="mt-4 rounded-[22px] border border-white/10 bg-[#151515] p-4">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <span class="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white">
                          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 3a9 9 0 1 0 9 9"></path>
                            <path d="M12 7v5l3 2"></path>
                          </svg>
                        </span>
                        <p class="text-[15px] font-semibold text-white">Your profile has been verified.</p>
                      </div>
                      <svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <h2 class="text-2xl font-semibold text-white">Compute Environment</h2>
                  <p class="max-w-md text-[15px] leading-7 text-zinc-400">Select the compute environment for your cluster.</p>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <h3 class="text-lg font-semibold text-white">Kubernetes</h3>
                      <p class="mt-2 max-w-lg text-[15px] leading-7 text-zinc-400">
                        Run GPU workloads on a K8s configured cluster. This is the default.
                      </p>
                    </div>
                    <div class="mt-1 grid h-5 w-5 place-items-center rounded-full border border-white/20">
                      <div class="h-2.5 w-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-[#111111] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <div class="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div class="flex items-center gap-2">
                      @for (page of pageSteps; track page) {
                        <button
                          type="button"
                          class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-sm font-semibold transition"
                          [ngClass]="page === 1 ? ['bg-white', 'text-black'] : ['bg-white/5', 'text-white']"
                        >
                          {{ page }}
                        </button>
                      }
                    </div>
                    <div class="flex items-center">
                      <button type="button" class="grid h-10 w-10 place-items-center rounded-l-xl border border-white/10 bg-white/5 text-white">
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                      <button type="button" class="grid h-10 w-10 place-items-center rounded-r-xl border border-l-0 border-white/10 bg-white/5 text-white">
                        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m9 6 6 6-6 6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between gap-3 rounded-[28px] border border-white/10 bg-white/[0.035] px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <div class="flex items-center gap-2 text-[15px] font-semibold text-white">
                    <span class="grid h-7 w-7 place-items-center rounded-lg border border-white/10">
                      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </span>
                    Copilot
                  </div>
                  <svg viewBox="0 0 24 24" class="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <h3 class="text-2xl font-semibold text-white">How did you hear about us?</h3>
                  <p class="mt-2 text-[15px] leading-7 text-zinc-400">
                    Select the option that best describes...
                  </p>
                  <div class="mt-6 flex flex-wrap gap-3">
                    @for (option of surveyOptions; track option.label) {
                      <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-semibold transition"
                        [ngClass]="option.active ? ['border-white/20', 'bg-white/80', 'text-black'] : ['border-white/10', 'bg-white/5', 'text-white']"
                      >
                        @if (option.active) {
                          <span class="grid h-5 w-5 place-items-center rounded-full bg-black text-white">
                            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="m20 6-11 11-5-5"></path>
                            </svg>
                          </span>
                        }
                        {{ option.label }}
                      </button>
                    }
                  </div>
                </div>
              </section>

              <section class="space-y-6">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Pattern note</p>
                    <p class="mt-3 text-xl font-semibold tracking-tight text-white">Reusable blocks stay legible at every size.</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-400">
                      This column can act as a side rail, supporting copy, or a lightweight checklist.
                    </p>
                  </div>

                  <div class="rounded-[28px] border border-white/10 bg-[#111111] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Surface mix</p>
                    <p class="mt-3 text-xl font-semibold tracking-tight text-white">Light, dark, and framed cards.</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-400">
                      Useful for future templates that need a little contrast without leaving the monochrome language.
                    </p>
                  </div>
                </div>

                <div class="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Checklist</p>
                  <div class="mt-4 space-y-3">
                    @for (item of landingChecks; track item) {
                      <div class="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                        <span class="mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-white/20 text-[11px] text-white">+</span>
                        <p class="text-sm leading-6 text-zinc-300">{{ item }}</p>
                      </div>
                    }
                  </div>
                </div>
              </section>
            </section>
          </section>

          <section
            id="templates"
            class="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]"
          >
            <div class="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(17,17,17,0.92)_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] lg:p-8">
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Template section</p>
                  <h2 class="text-3xl font-semibold tracking-tight text-white">A compact editorial fold.</h2>
                  <p class="max-w-2xl text-sm leading-7 text-zinc-400">
                    This is the kind of block you can lift into a product homepage, launch page, or sectioned app landing page.
                  </p>
                </div>

                <a routerLink="/template" class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Open template page
                </a>
              </div>

              <div class="mt-6 grid gap-4 sm:grid-cols-3">
                @for (tile of templateTiles; track tile.title) {
                  <div class="rounded-[28px] border border-white/10 bg-black/25 p-5">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{{ tile.eyebrow }}</p>
                    <p class="mt-3 text-lg font-semibold text-white">{{ tile.title }}</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-400">{{ tile.description }}</p>
                  </div>
                }
              </div>
            </div>

            <div class="space-y-6">
              <div class="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Trust block</p>
                <div class="mt-4 space-y-4">
                  <div class="rounded-[24px] border border-white/10 bg-[#111111] p-4">
                    <p class="text-sm leading-6 text-zinc-300">
                      "The layout feels more like a polished product intro now. It gives the component gallery a proper front door."
                    </p>
                    <p class="mt-3 text-sm font-semibold text-white">Ava, product designer</p>
                  </div>

                  <div class="rounded-[24px] border border-white/10 bg-[#111111] p-4">
                    <p class="text-sm leading-6 text-zinc-300">
                      "Use this section to explain the system, then hand off to the dedicated pages for the deeper examples."
                    </p>
                    <p class="mt-3 text-sm font-semibold text-white">Marcus, frontend engineer</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Support strip</p>
                <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p class="text-lg font-semibold text-white">Need more sections?</p>
                    <p class="mt-1 text-sm leading-6 text-zinc-400">
                      We can add a pricing table, testimonials, FAQ, or a newsletter band next.
                    </p>
                  </div>
                  <div class="flex flex-wrap gap-3">
                    <a routerLink="/contact" class="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
                      Contact page
                    </a>
                    <a routerLink="/auth" class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                      Auth page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  `,
})
export class LandingPageComponent {
  readonly navItems = [
    { label: 'Examples', href: '/', active: true },
    { label: 'Dashboard', href: '/dashboard', active: false },
    { label: 'Forms', href: '/forms', active: false },
    { label: 'Tasks', href: '/layouts', active: false },
    { label: 'Playground', href: '/template', active: false },
    { label: 'Authentication', href: '/auth', active: false },
  ];

  readonly heroStats = [
    { label: 'Sections', value: '8+', description: 'distinct page blocks' },
    { label: 'Routes', value: '6', description: 'quick jumps available' },
    { label: 'States', value: '12', description: 'previewed inline' },
  ];

  readonly quickRoutes = [
    { label: 'Dashboard', href: '/dashboard', description: 'metrics and summary surfaces' },
    { label: 'Forms', href: '/forms', description: 'reactive input patterns' },
    { label: 'Layouts', href: '/layouts', description: 'structure and shells' },
    { label: 'Auth', href: '/auth', description: 'login and recovery flows' },
  ];

  readonly featureCards = [
    { eyebrow: 'Reusable', title: 'Component gallery front door', description: 'A clearer opening section for the app.', href: '/components' },
    { eyebrow: 'Layouts', title: 'Page templates and shells', description: 'Good for future app or marketing views.', href: '/layouts' },
    { eyebrow: 'Forms', title: 'Validation and control states', description: 'A direct path to the interactive pieces.', href: '/forms' },
    { eyebrow: 'Auth', title: 'Focused sign-in flows', description: 'Useful when entry screens need more emphasis.', href: '/auth' },
  ];

  readonly syncStates = [
    { label: 'Syncing', active: true, spinning: true },
    { label: 'Updating', active: false, spinning: true },
    { label: 'Loading', active: false, spinning: true },
  ];

  readonly teamAvatars = [
    { label: 'User 1', initials: 'JD' },
    { label: 'User 2', initials: 'MS' },
    { label: 'User 3', initials: 'AR' },
    { label: 'User 4', initials: 'TG' },
    { label: 'User 5', initials: 'MK' },
  ];

  readonly pageSteps = [1, 2, 3];

  readonly surveyOptions = [
    { label: 'Social Media', active: true },
    { label: 'Search Engine', active: false },
    { label: 'Referral', active: false },
    { label: 'Other', active: true },
  ];

  readonly landingChecks = [
    'Start with a strong hero and clear navigation.',
    'Keep the core examples visible without a long scroll.',
    'Use a few secondary template blocks to show versatility.',
  ];

  readonly templateTiles = [
    { eyebrow: 'Trust', title: 'Testimonial rail', description: 'Compact social proof for marketing pages.' },
    { eyebrow: 'Action', title: 'Newsletter fold', description: 'A simple section for capture and follow-up.' },
    { eyebrow: 'Support', title: 'Help strip', description: 'Clear next steps for users who need guidance.' },
  ];
}

