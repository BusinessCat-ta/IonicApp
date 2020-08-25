import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterventiPagePage } from './interventi-page.page';

const routes: Routes = [
  {
    path: '',
    component: InterventiPagePage
  },
  {
    path: 'nav-page',
    loadChildren: () => import('./nav-page/nav-page.module').then( m => m.NavPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterventiPagePageRoutingModule {}
