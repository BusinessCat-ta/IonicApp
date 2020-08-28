import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornitoriPage } from './fornitori.page';

const routes: Routes = [
  {
    path: '',
    component: FornitoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornitoriPageRoutingModule {}
