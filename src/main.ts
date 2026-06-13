import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@core/config/app.config';
import { AppShellComponent } from '@core/layouts/app-shell.component';

bootstrapApplication(AppShellComponent, appConfig)
  .catch((err) => console.error(err));
