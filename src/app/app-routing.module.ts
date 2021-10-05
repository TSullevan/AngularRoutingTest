import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const desktopRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contato',
    loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
    canActivate: [AuthGuard]
  }
];

const defaultRoutes: Routes = [
  // {
  //   path: '404',
  //   component: NotFoundPageComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig(desktopRoutes);
  }
}
