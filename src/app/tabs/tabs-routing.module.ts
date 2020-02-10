import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'message',
        loadChildren: () => import('../message/message.module').then( m => m.MessagePageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/message',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/message',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}