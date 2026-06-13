import { Component } from '@angular/core';
import { UiAvatarComponent } from '@components/dot-avatar/dot-avatar.component';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiChipComponent } from '@components/dot-chip/dot-chip.component';
import { UiListItemComponent } from '@components/dot-list-item/dot-list-item.component';
import { UiProgressComponent } from '@components/dot-progress/dot-progress.component';
import { UiSeparatorComponent } from '@components/dot-separator/dot-separator.component';
import { UiStatCardComponent } from '@components/dot-stat-card/dot-stat-card.component';

@Component({
  selector: 'app-template-page',
  standalone: true,
  imports: [
    UiAvatarComponent,
    UiBadgeComponent,
    UiButtonComponent,
    UiCardComponent,
    UiChipComponent,
    UiListItemComponent,
    UiProgressComponent,
    UiSeparatorComponent,
    UiStatCardComponent,
  ],
  templateUrl: './template-page.component.html',
  styleUrl: './template-page.component.scss'
})
export class TemplatePageComponent {
  readonly stats = [
    { label: 'Sections', value: '9+', trend: 'ready to reuse' },
    { label: 'Layouts', value: '3', trend: 'hero, split, grid' },
    { label: 'Surfaces', value: '2', trend: 'light and dark' },
    { label: 'Patterns', value: '15', trend: 'for future pages' },
  ];

  readonly emails = [
    { subject: 'New project request', preview: 'A customer is asking for a custom layout.', time: '2m ago' },
    { subject: 'Template review', preview: 'The latest draft is ready for feedback.', time: '15m ago' },
    { subject: 'Marketing update', preview: 'Launch copy and visuals are almost final.', time: '1h ago' },
  ];

  readonly emailCards = [
    {
      sender: 'Lina Park',
      subject: 'Need a landing page variant',
      body: 'Could we turn the current hero into a more editorial, conversion-focused version for the homepage?',
    },
    {
      sender: 'Marcus Green',
      subject: 'Approval for the template page',
      body: 'The reusable sections look good. We can ship this as a reference for future pages.',
    },
  ];

  readonly contactCards = [
    { name: 'Ava Chen', role: 'Product Designer', email: 'ava@example.com', phone: '+1 (555) 210-3312' },
    { name: 'Noah Kim', role: 'Frontend Engineer', email: 'noah@example.com', phone: '+1 (555) 228-8910' },
    { name: 'Sally Smith', role: 'Support Lead', email: 'sally@example.com', phone: '+1 (555) 317-1094' },
  ];

  readonly metrics = [
    { label: 'Views', value: '24.8k' },
    { label: 'Leads', value: '1.2k' },
    { label: 'Replies', value: '86%' },
  ];

  readonly analyticsBars = [
    { label: 'Reach', value: 82 },
    { label: 'Engagement', value: 67 },
    { label: 'Conversion', value: 54 },
  ];

  readonly tools = [
    { label: 'Search', description: 'Quickly find content and records.', icon: 'search' as const },
    { label: 'Library', description: 'Organize reusable assets and snippets.', icon: 'folder' as const },
    { label: 'Focus', description: 'Keep priority work visible.', icon: 'spark' as const },
    { label: 'Overview', description: 'See the whole system at a glance.', icon: 'grid' as const },
  ];

  readonly features = [
    {
      title: 'Section-first planning',
      description: 'Each block is separated so the page reads like a kit instead of a wall of content.',
      body: 'That makes it easy to copy individual sections into future layouts.',
    },
    {
      title: 'Monochrome discipline',
      description: 'Black, white, and neutral grays keep the template flexible across products.',
      body: 'Semantic colors can still be added later for errors or success states.',
    },
    {
      title: 'Reusable density',
      description: 'Some sections are compact, others are roomy, so the page feels varied and practical.',
      body: 'That balance helps when you’re building a real reference page.',
    },
  ];

  readonly team = ['Ava Chen', 'Marcus Green', 'Sally Smith', 'Noah Kim'];

  readonly trustCards = [
    { title: 'Customers', value: '48 teams', description: 'Proof that the structure works for different use cases.' },
    { title: 'Uptime', value: '99.9%', description: 'Useful for service pages and operational tools.' },
    { title: 'Response', value: '24h', description: 'A clean support promise for contact surfaces.' },
    { title: 'Templates', value: '9 sections', description: 'Enough variety to remix the page quickly.' },
  ];

  readonly storyCards = [
    {
      eyebrow: 'Editorial',
      title: 'A content block for storytelling',
      description: 'Use this for a long-form narrative, product story, or announcement section with extra context.',
      tags: ['Story', 'Narrative', 'Brand'],
    },
    {
      eyebrow: 'Conversion',
      title: 'A tighter block for key actions',
      description: 'This layout stays direct and leaves room for one strong action or offer.',
      tags: ['CTA', 'Offer', 'Action'],
    },
  ];

  readonly supportContacts = [
    { label: 'Sales', description: 'Best for product questions and pricing', meta: 'sales@example.com' },
    { label: 'Support', description: 'Best for account and service help', meta: 'support@example.com' },
    { label: 'Partnerships', description: 'Best for collaboration and integration', meta: 'partners@example.com' },
  ];
}







