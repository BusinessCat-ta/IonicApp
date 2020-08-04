import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadFormPage } from './lead-form.page';

const routes: Routes = [
  {
    path: '',
    component: LeadFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadFormPageRoutingModule {}
