import { Routes } from '@angular/router';
import { AiPageComponent } from '@examples/ai/pages/ai-page.component';
import { AuthPageComponent } from '@examples/auth/pages/auth-page.component';
import { ContactPageComponent } from '@examples/contact/pages/contact-page.component';
import { DashboardPageComponent } from '@examples/dashboard/pages/dashboard-page.component';
import { FormsPageComponent } from '@examples/forms/pages/forms-page.component';
import { GradientPageComponent } from '@examples/gradient/pages/gradient-page.component';
import { HomePageComponent } from '@examples/home/pages/home-page.component';
import { LandingPageComponent } from '@examples/landing/pages/landing-page.component';
import { LayoutsPageComponent } from '@examples/layouts/pages/layouts-page.component';
import { SettingsPageComponent } from '@examples/settings/pages/settings-page.component';
import { TemplatePageComponent } from '@examples/template/pages/template-page.component';

export const examplesRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'components', component: HomePageComponent },
  { path: 'ai', component: AiPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'forms', component: FormsPageComponent },
  { path: 'layouts', component: LayoutsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'gradient', component: GradientPageComponent },
  { path: 'template', component: TemplatePageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: '**', redirectTo: '' },
];
