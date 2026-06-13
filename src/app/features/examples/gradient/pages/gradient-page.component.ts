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
  templateUrl: './gradient-page.component.html',
  styleUrl: './gradient-page.component.scss'
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







