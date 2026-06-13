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
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {}







