import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./businesses/businesses.module').then((m) => m.BusinessesModule),
    canActivate: [authGuard],
  },
  {
    path: 'sweeps',
    loadChildren: () =>
      import('./sweeps/sweeps.module').then((m) => m.SweepsModule),
    canActivate: [authGuard],
  },
  {
    path: 'user_management',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
