import { Component, signal } from '@angular/core';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiSeparatorComponent } from '@components/dot-separator/dot-separator.component';
import { DotProfileFormComponent, DotProfileFormValue } from '@forms/dot-profile-form/dot-profile-form.component';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [UiBadgeComponent, UiCardComponent, DotProfileFormComponent, UiSeparatorComponent],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.scss'
})
export class FormsPageComponent {
  readonly submission = signal<DotProfileFormValue | null>(null);
}



