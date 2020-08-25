import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrmPagePage } from './crm-page.page';

const routes: Routes = [
  {
    path: '',
    component: CrmPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrmPagePageRoutingModule {}
