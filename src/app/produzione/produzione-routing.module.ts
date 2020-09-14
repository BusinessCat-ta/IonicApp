import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduzionePage } from './produzione.page';

const routes: Routes = [
  {
    path: '',
    component: ProduzionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduzionePageRoutingModule {}
