import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiAvatarComponent } from '@components/dot-avatar/dot-avatar.component';
import { UiAlertComponent } from '@components/dot-alert/dot-alert.component';
import { UiAlertDialogComponent } from '@components/dot-alert-dialog/dot-alert-dialog.component';
import { UiAppIconComponent } from '@components/dot-app-icon/dot-app-icon.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiButtonGroupComponent } from '@components/dot-button-group/dot-button-group.component';
import { UiBreadcrumbComponent } from '@components/dot-breadcrumb/dot-breadcrumb.component';
import { UiCalendarComponent } from '@components/dot-calendar/dot-calendar.component';
import { UiCarouselComponent } from '@components/dot-carousel/dot-carousel.component';
import { UiChartComponent } from '@components/dot-chart/dot-chart.component';
import { UiCheckboxComponent } from '@components/dot-checkbox/dot-checkbox.component';
import { UiAccordionComponent } from '@components/dot-accordion/dot-accordion.component';
import { UiCollapsibleComponent } from '@components/dot-collapsible/dot-collapsible.component';
import { UiCommandComponent } from '@components/dot-command/dot-command.component';
import { UiDataTableComponent } from '@components/dot-data-table/dot-data-table.component';
import { UiDatePickerComponent } from '@components/dot-date-picker/dot-date-picker.component';
import { UiEmptyStateComponent } from '@components/dot-empty-state/dot-empty-state.component';
import { UiChipComponent } from '@components/dot-chip/dot-chip.component';
import { UiColorSwatchComponent } from '@components/dot-color-swatch/dot-color-swatch.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiDialogComponent } from '@components/dot-dialog/dot-dialog.component';
import { UiDropdownComponent } from '@components/dot-dropdown/dot-dropdown.component';
import { UiNavigationMenuComponent } from '@components/dot-navigation-menu/dot-navigation-menu.component';
import { UiMenubarComponent } from '@components/dot-menubar/dot-menubar.component';
import { UiListItemComponent } from '@components/dot-list-item/dot-list-item.component';
import { UiIconButtonComponent } from '@components/dot-icon-button/dot-icon-button.component';
import { UiInputComponent } from '@components/dot-input/dot-input.component';
import { UiProgressComponent } from '@components/dot-progress/dot-progress.component';
import { UiPaginationComponent } from '@components/dot-pagination/dot-pagination.component';
import { UiRadioComponent } from '@components/dot-radio/dot-radio.component';
import { UiRadioGroupComponent } from '@components/dot-radio-group/dot-radio-group.component';
import { UiNavbarComponent } from '@components/dot-navbar/dot-navbar.component';
import { UiSelectComponent } from '@components/dot-select/dot-select.component';
import { UiSkeletonComponent } from '@components/dot-skeleton/dot-skeleton.component';
import { UiSheetComponent } from '@components/dot-sheet/dot-sheet.component';
import { UiSeparatorComponent } from '@components/dot-separator/dot-separator.component';
import { UiStatCardComponent } from '@components/dot-stat-card/dot-stat-card.component';
import { UiTableComponent } from '@components/dot-table/dot-table.component';
import { UiTabsComponent } from '@components/dot-tabs/dot-tabs.component';
import { UiToastComponent } from '@components/dot-toast/dot-toast.component';
import { UiTextareaComponent } from '@components/dot-textarea/dot-textarea.component';
import { UiToggleComponent } from '@components/dot-toggle/dot-toggle.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    UiAlertComponent,
    UiAlertDialogComponent,
    UiAvatarComponent,
    UiBadgeComponent,
    UiAppIconComponent,
    UiAccordionComponent,
    UiButtonComponent,
    UiButtonGroupComponent,
    UiBreadcrumbComponent,
    UiCalendarComponent,
    UiCarouselComponent,
    UiChartComponent,
    UiCheckboxComponent,
    UiCollapsibleComponent,
    UiCommandComponent,
    UiDataTableComponent,
    UiDatePickerComponent,
    UiEmptyStateComponent,
    UiChipComponent,
    UiColorSwatchComponent,
    UiCardComponent,
    UiDialogComponent,
    UiDropdownComponent,
    UiNavigationMenuComponent,
    UiMenubarComponent,
    UiIconButtonComponent,
    UiListItemComponent,
    UiInputComponent,
    UiProgressComponent,
    UiPaginationComponent,
    UiRadioComponent,
    UiRadioGroupComponent,
    UiNavbarComponent,
    UiSelectComponent,
    UiSkeletonComponent,
    UiSheetComponent,
    UiSeparatorComponent,
    UiStatCardComponent,
    UiTableComponent,
    UiTabsComponent,
    UiToastComponent,
    UiTextareaComponent,
    UiToggleComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly textFieldBaseClass =
    'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-black placeholder:text-zinc-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-black/10';
  readonly checkboxBaseClass = 'mt-1 h-4 w-4 rounded border-zinc-300 text-black focus:ring-black';

  title = 'tala-client';

  readonly buttonVariants = [
    { label: 'Primary Button', variant: 'solid' as const },
    { label: 'Secondary Button', variant: 'outline' as const },
    { label: 'Ghost Button', variant: 'ghost' as const },
    { label: 'Error Button', variant: 'error' as const },
  ];

  readonly iconButtons = [
    { icon: 'plus' as const, label: 'Add item', variant: 'solid' as const },
    { icon: 'pencil' as const, label: 'Edit item', variant: 'outline' as const },
    { icon: 'trash' as const, label: 'Delete item', variant: 'outline' as const },
    { icon: 'bookmark' as const, label: 'Save item', variant: 'ghost' as const },
    { icon: 'search' as const, label: 'Search item', variant: 'ghost' as const },
    { icon: 'share' as const, label: 'Share item', variant: 'ghost' as const },
  ];

  readonly dropdownOptions = [
    { label: 'Edit', value: 'edit', description: 'Open the editor for this item.' },
    { label: 'Duplicate', value: 'duplicate', description: 'Create a copy of the selected item.' },
    { label: 'Archive', value: 'archive', description: 'Move this item out of the active view.' },
    { label: 'Delete', value: 'delete', description: 'Remove this item permanently.', destructive: true },
  ];

  readonly selectedDropdownAction = signal('duplicate');
  readonly selectedButtonGroup = signal('week');
  readonly selectedRadioGroup = signal('monthly');
  readonly selectedDate = signal<string | null>(null);
  readonly currentPage = signal(2);
  readonly sheetOpen = signal(false);
  readonly alertDialogOpen = signal(false);
  readonly toastVisible = signal(true);

  readonly badgeVariants = [
    { label: 'Success', variant: 'soft' as const, tone: 'success' as const },
    { label: 'Warning', variant: 'soft' as const, tone: 'warning' as const },
    { label: 'Error', variant: 'soft' as const, tone: 'error' as const },
    { label: 'Info', variant: 'outline' as const, tone: 'default' as const },
  ];

  readonly chipVariants = [
    { label: 'Angular', selected: true },
    { label: 'AI', selected: false },
    { label: 'Productivity', selected: false },
    { label: 'Research', selected: false },
  ];

  readonly stats = [
    { label: 'Reusable components', value: '14' },
    { label: 'Color system', value: 'Black / White' },
    { label: 'Tailwind ready', value: 'Yes' },
  ];

  readonly sampleNote =
    'A monochrome design system inspired by shadcn-style previews and component boards.';

  readonly navLinks = [
    {
      label: 'Products',
      menu: [
        {
          title: 'AI Cloud',
          items: [
            { label: 'AI Gateway', description: 'One endpoint, all your models', href: '#components', icon: 'spark' as const },
            { label: 'Sandbox', description: 'Isolated, safe code execution', href: '#components', icon: 'cube' as const },
            { label: 'AI SDK', description: 'The AI toolkit for TypeScript', href: '#components', icon: 'tool' as const },
          ],
        },
        {
          title: 'Core Platform',
          items: [
            { label: 'CI/CD', description: 'Helping teams ship faster', href: '#patterns', icon: 'flow' as const },
            { label: 'Content Delivery', description: 'Fast, scalable, and reliable', href: '#cards', icon: 'grid' as const },
            { label: 'Workflow', description: 'Long-running workflows at scale', href: '#states', icon: 'chart' as const },
          ],
        },
        {
          title: 'Security',
          items: [
            { label: 'Bot Management', description: 'Scalable bot protection', href: '#data', icon: 'lock' as const },
            { label: 'Platform Security', description: 'DDoS protection and firewall rules', href: '#alerts', icon: 'shield' as const },
            { label: 'Web App Firewall', description: 'Granular, custom protection', href: '#dropdowns', icon: 'shield' as const },
          ],
        },
      ],
    },
    { label: 'Resources', href: '#components' },
    { label: 'Solutions', href: '#forms' },
    { label: 'Enterprise', href: '#data' },
    { label: 'Pricing', href: '#cards' },
  ];

  readonly landingTabs = [
    { label: 'Examples', href: '#components', active: true },
    { label: 'Dashboard', href: '#cards' },
    { label: 'Tasks', href: '#data' },
    { label: 'Playground', href: '#states' },
    { label: 'Authentication', href: '#forms' },
  ];

  readonly landingCards = [
    {
      title: 'Dashboard',
      description: 'Compact status cards, charts, tables, and live controls.',
      href: '#data',
      eyebrow: 'Preview 01',
    },
    {
      title: 'Forms',
      description: 'Inputs, selects, toggles, and validation patterns.',
      href: '#forms',
      eyebrow: 'Preview 02',
    },
    {
      title: 'States',
      description: 'Loading, empty, progress, alert, and motion-ready surfaces.',
      href: '#states',
      eyebrow: 'Preview 03',
    },
    {
      title: 'Patterns',
      description: 'Navigation and reusable layouts for app shells.',
      href: '#patterns',
      eyebrow: 'Preview 04',
    },
    {
      title: 'AI',
      description: 'Assistant widgets and a workspace-style chat layout.',
      href: '/ai',
      eyebrow: 'Preview 05',
    },
  ];

  readonly componentSections = [
    { label: 'Buttons', href: '#buttons', count: '2' },
    { label: 'Forms', href: '#inputs', count: '3' },
    { label: 'Selections', href: '#selection', count: '3' },
    { label: 'Tags', href: '#tags', count: '2' },
    { label: 'App icons', href: '#app-icons', count: '3' },
    { label: 'Cards', href: '#cards', count: '4' },
    { label: 'Lists', href: '#lists', count: '2' },
    { label: 'Dialogs', href: '#dialogs', count: '1' },
    { label: 'Dropdowns', href: '#dropdowns', count: '2' },
    { label: 'Alerts', href: '#alerts', count: '3' },
    { label: 'Navigation', href: '#navigation', count: '4' },
    { label: 'Data', href: '#data', count: '4' },
    { label: 'States', href: '#states', count: '7' },
    { label: 'Patterns', href: '#patterns', count: '2' },
  ];

  readonly componentPills = [
    'dot-button',
    'dot-icon-button',
    'dot-input',
    'dot-textarea',
    'dot-select',
    'dot-checkbox',
    'dot-radio',
    'dot-toggle',
    'dot-chip',
    'dot-badge',
    'dot-app-icon',
    'dot-card',
    'dot-card-header',
    'dot-card-content',
    'dot-card-footer',
    'dot-list-item',
    'dot-dialog',
    'dot-dropdown',
    'dot-alert-dialog',
    'dot-accordion',
    'dot-breadcrumb',
    'dot-button-group',
    'dot-calendar',
    'dot-carousel',
    'dot-chart',
    'dot-collapsible',
    'dot-command',
    'dot-data-table',
    'dot-date-picker',
    'dot-empty-state',
    'dot-alert',
    'dot-navigation-menu',
    'dot-menubar',
    'dot-pagination',
    'dot-radio-group',
    'dot-sheet',
    'dot-skeleton',
    'dot-table',
    'dot-toast',
    'dot-navbar',
    'dot-tabs',
    'dot-progress',
    'dot-avatar',
  ];

  readonly breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#components' },
    { label: 'Navigation' },
  ];

  readonly navigationMenuItems = [
    { label: 'Dashboard', href: '#navigation', description: 'Jump back to the top navigation demos.' },
    { label: 'Forms', href: '#inputs', description: 'See the input and select patterns.' },
    { label: 'Tables', href: '#data', description: 'Browse chart and data views.' },
  ];

  readonly menubarItems = [
    { label: 'File', href: '#' },
    { label: 'Edit', href: '#' },
    { label: 'View', href: '#' },
    { label: 'Help', href: '#' },
  ];

  readonly accordionItems = [
    { title: 'What does this system cover?', content: 'The gallery focuses on reusable, monochrome primitives that work well for product dashboards and assistant tools.' },
    { title: 'Why separate sections?', content: 'Breaking the kit into labeled sections makes it easier to scan and compare variations quickly.' },
    { title: 'Can these be reused in forms?', content: 'Yes. Most of the pieces are designed to work in dashboard screens, settings forms, and command surfaces.' },
  ];

  readonly buttonGroupItems = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
  ];

  readonly radioGroupOptions = [
    { label: 'Daily', value: 'daily', description: 'Best for fast updates.' },
    { label: 'Weekly', value: 'weekly', description: 'Balanced overview.' },
    { label: 'Monthly', value: 'monthly', description: 'Good for reporting.' },
  ];

  readonly chartValues = [14, 22, 18, 30, 26, 42, 38];

  readonly tableColumns = [
    { label: 'Name' },
    { label: 'Status' },
    { label: 'Owner' },
  ];

  readonly tableRows = [
    { cells: ['Personal AI Assistant', 'Live', 'Product'] },
    { cells: ['Design System', 'Draft', 'UI'] },
    { cells: ['Billing Flow', 'Review', 'Finance'] },
  ];

  readonly dataTableColumns = [
    { label: 'Component' },
    { label: 'Type' },
    { label: 'Status' },
  ];

  readonly dataTableRows = [
    { cells: ['dot-button', 'Action', 'Ready'] },
    { cells: ['dot-dropdown', 'Menu', 'Ready'] },
    { cells: ['dot-dialog', 'Overlay', 'Ready'] },
    { cells: ['dot-data-table', 'Data', 'Ready'] },
  ];

  readonly commandItems = [
    { label: 'Create new task', hint: 'Ctrl N' },
    { label: 'Open component library', hint: 'Ctrl K' },
    { label: 'Search current page', hint: '/' },
    { label: 'Toggle sidebar', hint: 'Ctrl B' },
  ];

  readonly carouselItems = [
    { title: 'First slide', description: 'A simple slide surface for featured content or onboarding.' },
    { title: 'Second slide', description: 'Use this for rotating examples, walkthroughs, or featured updates.' },
    { title: 'Third slide', description: 'Keep the content concise so the carousel stays easy to scan.' },
  ];

  readonly tabItems = [
    { label: 'Overview', value: 'Use this tab structure for settings, workflows, or content switches.' },
    { label: 'Activity', value: 'A simple active state is enough for many dashboard and detail layouts.' },
    { label: 'Settings', value: 'The component stays neutral so it can fit both forms and data screens.' },
  ];

  readonly colors = [
    { name: 'Primary', value: '#111111', tone: 'black' as const },
    { name: 'Secondary', value: '#333333', tone: 'dark' as const },
    { name: 'Tertiary', value: '#6B7280', tone: 'gray' as const },
    { name: 'Border', value: '#E5E7EB', tone: 'light' as const },
    { name: 'White', value: '#FFFFFF', tone: 'white' as const },
  ];

  readonly selectionChecks = [
    { label: 'Default', checked: false, disabled: false },
    { label: 'Checked', checked: true, disabled: false },
    { label: 'Disabled unchecked', checked: false, disabled: true },
    { label: 'Disabled checked', checked: true, disabled: true },
  ];

  readonly radioOptions = [
    { label: 'Default', selected: false, disabled: false },
    { label: 'Selected', selected: true, disabled: false },
    { label: 'Disabled unselected', selected: false, disabled: true },
    { label: 'Disabled selected', selected: true, disabled: true },
  ];

  readonly toggleStates = [
    { label: 'Off', on: false, disabled: false },
    { label: 'On', on: true, disabled: false },
    { label: 'Disabled', on: false, disabled: true },
  ];

  readonly avatarNames = ['John Doe', 'Sally Smith', 'Anna Lopez', 'Marcus Green', 'Team'];

  readonly listItems = [
    { title: 'Default List Item' },
    { title: 'List Item with Icon', meta: '' },
    { title: 'List Item with Avatar', avatar: 'John Doe', meta: 'John Doe' },
    { title: 'List Item with Description', description: 'This is a secondary text.' },
    { title: 'List Item with Action', meta: 'More' },
  ];

  readonly alerts = [
    { title: 'Success message', description: 'Your changes have been saved.', tone: 'success' as const },
    { title: 'Warning message', description: 'Your storage is almost full.', tone: 'warning' as const },
    { title: 'Error message', description: 'Something went wrong. Try again.', tone: 'error' as const },
  ];

  readonly progress = [
    { label: 'Progress Bar', value: 60 },
    { label: 'Circular Progress', value: 75 },
    { label: 'Loading Spinner', value: 35 },
  ];

  readonly skeletonCards = [
    { title: 'Article preview', variant: 'text' as const, lines: 3, className: 'max-w-xl' },
    { title: 'Media block', variant: 'rect' as const, lines: 1, className: 'h-40' },
    { title: 'Avatar chip', variant: 'circle' as const, lines: 1, className: 'h-12 w-12' },
  ];

  readonly selectOptions = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Research', value: 'research' },
  ];

  readonly cards = [
    {
      title: 'Default Card',
      description: 'This is a default card with subtle shadow and rounded corners.',
      className: '',
    },
    {
      title: 'Hover Card',
      description: 'This card lifts on hover to indicate interactivity.',
      className: 'hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] transition',
    },
    {
      title: 'Bordered Card',
      description: 'This card has a border instead of shadow.',
      className: 'shadow-none',
    },
  ];

  readonly activityList = [
    { title: 'Personal AI Assistant', meta: 'Home', avatar: 'Personal AI' },
    { title: 'AI Chat', meta: 'Open', avatar: 'AI Chat' },
    { title: 'Tools', meta: '3', avatar: 'Tools' },
    { title: 'Calendar', meta: 'Today', avatar: 'Calendar' },
    { title: 'Profile', meta: 'You', avatar: 'Profile' },
  ];

  readonly profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['designer', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    newsletter: [true],
    agree: [false, Validators.requiredTrue],
  });

  readonly submittedProfile = signal<string | null>(null);

  submitProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.submittedProfile.set(JSON.stringify(this.profileForm.getRawValue(), null, 2));
  }

  fieldClass(invalid: boolean): string {
    return [
      this.textFieldBaseClass,
      invalid ? 'border-red-500 focus:border-red-600 focus:ring-red-500/10' : 'focus:border-black',
    ].join(' ');
  }

  checkboxClass(invalid: boolean): string {
    return [this.checkboxBaseClass, invalid ? 'border-red-500' : ''].filter(Boolean).join(' ');
  }
}






