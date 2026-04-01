import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then((m) => m.LandingComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'dashboard/:spreadsheetId',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'deposit/new/:spreadsheetId',
    loadComponent: () =>
      import('./features/deposit/new-deposit/new-deposit.component').then((m) => m.NewDepositComponent),
    canActivate: [authGuard]
  },
  {
    path: 'history/:spreadsheetId',
    loadComponent: () =>
      import('./features/history/history.component').then((m) => m.HistoryComponent),
    canActivate: [authGuard]
  },
  {
    path: 'group/:spreadsheetId',
    loadComponent: () =>
      import('./features/group/group.component').then((m) => m.GroupComponent),
    canActivate: [authGuard]
  },
  {
    path: 'join/:token',
    loadComponent: () =>
      import('./features/join/join.component').then((m) => m.JoinComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
