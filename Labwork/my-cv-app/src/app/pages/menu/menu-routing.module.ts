/* Tuukka Tihekari 1800576 01.05.2020 */

import { AuthGuard } from '../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,

    // Here are all paths that are children to menuPage
    children: [
      // Menu
      {
        path: 'technical-skills',
        loadChildren: () =>
          import('../technical-skills/technical-skills.module').then(
            (m) => m.TechnicalSkillsPageModule
          ),
      },
      {
        path: 'soft-skills',
        loadChildren: () =>
          import('../soft-skills/soft-skills.module').then(
            (m) => m.SoftSkillsPageModule
          ),
      },
      {
        path: 'personal-projects',
        loadChildren: () =>
          import('../personal-projects/personal-projects.module').then(
            (m) => m.PersonalProjectsPageModule
          ),
      },
      {
        path: 'team-projects',
        loadChildren: () =>
          import('../team-projects/team-projects.module').then(
            (m) => m.TeamProjectsPageModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactPageModule),
      },
      {
        path: 'view-entry',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../view-entry/view-entry.module').then(
            (m) => m.ViewEntryPageModule
          ),
      },
      {
        path: 'add-entry',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../add-entry/add-entry.module').then(
            (m) => m.AddEntryPageModule
          ),
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      // Tabs
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'cv',
        loadChildren: () =>
          import('../cv/cv.module').then((m) => m.CvPageModule),
      },
      {
        path: 'guestbook',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../guestbook/guestbook.module').then(
            (m) => m.GuestbookPageModule
          ),
      },
    ],
  },
  /* {
    path: '',
    redirectTo: '/menu/home'
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
