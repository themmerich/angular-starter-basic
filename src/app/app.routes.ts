import { Routes } from '@angular/router';
import { ShellComponent } from './core/feat-navigation/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ShellComponent,
    title: 'SkillFlowAI',
  }
];
