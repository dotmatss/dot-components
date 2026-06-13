import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
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


