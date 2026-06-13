import { Routes } from '@angular/router';
import { examplesRoutes } from '@examples/examples.route';

export const routes: Routes = [
  {
    path: '',
    children: examplesRoutes,
  },
];

