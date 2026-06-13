import { Component } from '@angular/core';
import { UiAppIconComponent } from '@components/dot-app-icon/dot-app-icon.component';
import { UiAvatarComponent } from '@components/dot-avatar/dot-avatar.component';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiChipComponent } from '@components/dot-chip/dot-chip.component';

type ThreadRole = 'user' | 'assistant' | 'system';

@Component({
  selector: 'app-ai-page',
  standalone: true,
  imports: [UiAppIconComponent, UiAvatarComponent, UiBadgeComponent, UiButtonComponent, UiCardComponent, UiChipComponent],
  template: `
    <section class="space-y-8">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="space-y-3">
          <dot-badge variant="outline">AI</dot-badge>
          <div class="space-y-2">
            <h1 class="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              AI widget and chat layouts
            </h1>
            <p class="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              A monochrome reference for compact assistant widgets and a second chat layout that feels more like a workspace than a messenger.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <dot-button variant="solid">Open assistant</dot-button>
          <dot-button variant="outline">Copy prompt</dot-button>
        </div>
      </div>

      <div class="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <dot-card
          title="AI widget"
          description="A compact assistant surface for dashboards, sidebars, and quick actions."
        >
          <div class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="space-y-4 rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <div class="flex items-center gap-4">
                <dot-app-icon size="md" label="AI assistant widget icon"></dot-app-icon>
                <div class="min-w-0">
                  <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Assistant</p>
                  <p class="mt-1 text-xl font-semibold tracking-tight text-black dark:text-zinc-50">Personal AI workspace</p>
                </div>
              </div>

              <div class="grid gap-3 rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                @for (stat of widgetStats; track stat.label) {
                  <div class="flex items-center justify-between gap-3">
                    <span class="text-sm text-zinc-600 dark:text-zinc-300">{{ stat.label }}</span>
                    <span class="text-sm font-semibold text-black dark:text-zinc-50">{{ stat.value }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-[28px] border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Quick prompts</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      A compact launcher for common assistant tasks.
                    </p>
                  </div>
                  <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                    Ready
                  </span>
                </div>

                <div class="mt-4 flex flex-wrap gap-2">
                  @for (prompt of quickPrompts; track prompt) {
                    <dot-chip [selected]="prompt.selected">{{ prompt.label }}</dot-chip>
                  }
                </div>
              </div>

              <div class="rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <label class="block space-y-2">
                  <span class="text-sm font-medium text-black dark:text-zinc-100">Prompt</span>
                  <textarea
                    rows="5"
                    class="w-full resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-black shadow-sm transition placeholder:text-zinc-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10"
                    placeholder="Ask the assistant to summarize, plan, or rewrite something..."
                  ></textarea>
                </label>

                <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p class="text-sm text-zinc-600 dark:text-zinc-300">Use this widget for focused, high-frequency interactions.</p>
                  <dot-button variant="solid">Send</dot-button>
                </div>
              </div>
            </div>
          </div>
        </dot-card>

        <dot-card
          title="AI chat section"
          description="A different chat layout with history, thread, and context in one workspace."
        >
          <div class="grid gap-4 xl:grid-cols-[220px_minmax(0,1fr)_260px]">
            <aside class="rounded-[28px] border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div class="space-y-2">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">History</p>
                <p class="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Recent chats and saved threads stay visible without taking over the whole screen.
                </p>
              </div>

              <div class="mt-4 space-y-2">
                @for (conversation of conversations; track conversation.title) {
                  <button
                    type="button"
                    [class]="conversationClass(conversation.active)"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <p class="text-sm font-semibold tracking-tight">{{ conversation.title }}</p>
                      <span class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        {{ conversation.time }}
                      </span>
                    </div>
                    <p class="mt-1 text-sm leading-6 text-current/70">{{ conversation.preview }}</p>
                  </button>
                }
              </div>
            </aside>

            <div class="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.05)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
              <div class="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Thread</p>
                  <h2 class="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">Design review assistant</h2>
                </div>
                <div class="flex items-center gap-2">
                  <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                    Live
                  </span>
                  <dot-button variant="outline" size="sm">Share</dot-button>
                </div>
              </div>

              <div class="space-y-5 py-5">
                @for (message of thread; track message.id) {
                  <div class="flex gap-3" [class.justify-end]="message.role === 'user'">
                    @if (message.role !== 'user') {
                      <div class="mt-1">
                        <dot-app-icon size="sm" label="Assistant icon"></dot-app-icon>
                      </div>
                    }

                    <div
                      [class]="messageBubbleClass(message.role)"
                    >
                      <div class="flex items-center justify-between gap-4">
                        <p class="text-sm font-semibold tracking-tight">{{ message.author }}</p>
                        <p class="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">{{ message.time }}</p>
                      </div>
                      <p class="mt-2 text-sm leading-6 opacity-90">{{ message.text }}</p>

                      @if (message.tags.length) {
                        <div class="mt-3 flex flex-wrap gap-2">
                          @for (tag of message.tags; track tag) {
                            <span class="rounded-full border border-current/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                              {{ tag }}
                            </span>
                          }
                        </div>
                      }
                    </div>

                    @if (message.role === 'user') {
                      <dot-avatar name="You"></dot-avatar>
                    }
                  </div>
                }
              </div>

              <div class="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <label class="block space-y-2">
                  <span class="text-sm font-medium text-black dark:text-zinc-100">Reply</span>
                  <textarea
                    rows="4"
                    class="w-full resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-black shadow-sm transition placeholder:text-zinc-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-100/10"
                    placeholder="Ask the assistant to rewrite, summarize, or compare options..."
                  ></textarea>
                </label>

                <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div class="flex flex-wrap gap-2">
                    <dot-chip [selected]="true">Draft</dot-chip>
                    <dot-chip>Summarize</dot-chip>
                    <dot-chip>Compare</dot-chip>
                  </div>
                  <dot-button variant="solid">Send reply</dot-button>
                </div>
              </div>
            </div>

            <aside class="space-y-4">
              <div class="rounded-[28px] border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Context</p>
                <div class="mt-4 space-y-3">
                  @for (item of contextItems; track item.label) {
                    <div class="rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                      <p class="text-sm font-semibold text-black dark:text-zinc-50">{{ item.label }}</p>
                      <p class="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{{ item.value }}</p>
                    </div>
                  }
                </div>
              </div>

              <div class="rounded-[28px] border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Next steps</p>
                <div class="mt-4 space-y-3">
                  @for (step of nextSteps; track step) {
                    <div class="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-950">
                      <span class="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                        {{ step.index }}
                      </span>
                      <p class="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{{ step.label }}</p>
                    </div>
                  }
                </div>
              </div>
            </aside>
          </div>
        </dot-card>
      </div>
    </section>
  `,
})
export class AiPageComponent {
  readonly widgetStats = [
    { label: 'Mode', value: 'Balanced' },
    { label: 'Latency', value: 'Low' },
    { label: 'Context', value: '8 files' },
    { label: 'Status', value: 'Ready' },
  ];

  readonly quickPrompts = [
    { label: 'Summarize thread', selected: true },
    { label: 'Draft response', selected: false },
    { label: 'Extract tasks', selected: false },
    { label: 'Rewrite shorter', selected: false },
  ];

  readonly conversations = [
    {
      title: 'Design review',
      preview: 'Refine the assistant prompt and the composer layout.',
      time: 'Now',
      active: true,
    },
    {
      title: 'Release notes',
      preview: 'Convert the last meeting into a short changelog.',
      time: '18m',
      active: false,
    },
    {
      title: 'Research brief',
      preview: 'Pull the important points into a decision memo.',
      time: 'Yesterday',
      active: false,
    },
  ];

  readonly thread = [
    {
      id: 1,
      role: 'system' as const,
      author: 'Assistant',
      time: '09:10',
      text: 'I pulled in the latest design notes and organized them into a clean conversation layout.',
      tags: ['Context', 'Workspace'],
    },
    {
      id: 2,
      role: 'user' as const,
      author: 'You',
      time: '09:12',
      text: 'Show me a layout that feels more like a working space than a standard chat window.',
      tags: [],
    },
    {
      id: 3,
      role: 'assistant' as const,
      author: 'Assistant',
      time: '09:13',
      text: 'Use a split layout with history on the left, the main thread in the center, and context on the right so the chat stays focused.',
      tags: ['Split view', 'Reference'],
    },
  ];

  readonly contextItems = [
    { label: 'Current goal', value: 'Design a chat surface that can live inside a product dashboard.' },
    { label: 'Tone', value: 'Monochrome, compact, and easy to scan.' },
    { label: 'Focus', value: 'Conversation plus supporting context without extra chrome.' },
  ];

  readonly nextSteps = [
    { index: '01', label: 'Tune the prompt shortcuts' },
    { index: '02', label: 'Add source references' },
    { index: '03', label: 'Swap in real model data' },
  ];

  conversationClass(active: boolean): string {
    const base = 'w-full rounded-2xl border px-3 py-3 text-left transition';
    const inactive =
      'border-zinc-200 bg-white text-zinc-600 hover:border-black hover:text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100';

    return active
      ? [base, 'border-black bg-white text-black dark:border-zinc-200 dark:bg-zinc-900 dark:text-zinc-50'].join(' ')
      : [base, inactive].join(' ');
  }

  messageBubbleClass(role: ThreadRole): string {
    const base = 'max-w-[min(100%,34rem)] rounded-[24px] border px-4 py-3.5 shadow-sm';

    if (role === 'user') {
      return [base, 'border-zinc-300 bg-black text-white dark:border-zinc-700 dark:bg-white dark:text-black'].join(' ');
    }

    if (role === 'assistant') {
      return [base, 'border-zinc-200 bg-zinc-50 text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50'].join(' ');
    }

    return [base, 'border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300'].join(' ');
  }
}


