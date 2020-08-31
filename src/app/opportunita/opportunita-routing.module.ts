import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpportunitaPage } from './opportunita.page';

const routes: Routes = [
  {
    path: '',
    component: OpportunitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpportunitaPageRoutingModule {}
