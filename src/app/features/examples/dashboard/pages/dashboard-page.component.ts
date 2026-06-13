import { Component } from '@angular/core';
import { UiAlertComponent } from '@components/dot-alert/dot-alert.component';
import { UiBadgeComponent } from '@components/dot-badge/dot-badge.component';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';
import { UiCardComponent } from '@components/dot-card/dot-card.component';
import { UiChartComponent } from '@components/dot-chart/dot-chart.component';
import { UiListItemComponent } from '@components/dot-list-item/dot-list-item.component';
import { UiProgressComponent } from '@components/dot-progress/dot-progress.component';
import { UiStatCardComponent } from '@components/dot-stat-card/dot-stat-card.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [UiAlertComponent, UiBadgeComponent, UiButtonComponent, UiCardComponent, UiChartComponent, UiListItemComponent, UiProgressComponent, UiStatCardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {}







