import { AuthGuard } from '../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      // Menu items
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      },
      {
        path: 'invite',
        canActivate: [AuthGuard],
        loadChildren: '../invite/invite.module#InvitePageModule'
      },
      {
        path: 'view-song',
        loadChildren: '../view-song/view-song.module#ViewSongPageModule'
      },
      {
        path: 'edit-song',
        canActivate: [AuthGuard],
        loadChildren: '../edit-song/edit-song.module#EditSongPageModule'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      // Tabs
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        canActivate: [AuthGuard],
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  }
  /* {
    path: '',
    redirectTo: '/menu/home'
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule {}
