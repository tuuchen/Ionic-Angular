import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Changes made in AppRoutingModule
const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./pages/verify-email/verify-email.module').then(
        m => m.VerifyEmailPageModule
      )
  },
  {
    path: 'view-song',
    loadChildren: () => import('./pages/view-song/view-song.module').then( m => m.ViewSongPageModule)
  },
  {
    path: 'edit-song',
    loadChildren: () => import('./pages/edit-song/edit-song.module').then( m => m.EditSongPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
