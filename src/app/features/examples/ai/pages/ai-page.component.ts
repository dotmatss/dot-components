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
  templateUrl: './ai-page.component.html',
  styleUrl: './ai-page.component.scss'
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



