import { Component } from '@angular/core';
import { UiAccordionComponent } from '@components/dot-accordion/dot-accordion.component';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiCollapsibleComponent } from '@components/dot-collapsible/dot-collapsible.component';
import { UiNavigationMenuComponent } from '@components/dot-navigation-menu/dot-navigation-menu.component';

@Component({
  selector: 'app-layouts-page',
  standalone: true,
  imports: [UiAccordionComponent, UiBadgeComponent, UiButtonComponent, UiCardComponent, UiCollapsibleComponent, UiNavigationMenuComponent],
  templateUrl: './layouts-page.component.html',
  styleUrl: './layouts-page.component.scss'
})
export class LayoutsPageComponent {}







