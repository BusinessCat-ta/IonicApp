import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescrizioneOffertaPage } from './descrizione-offerta.page';

const routes: Routes = [
  {
    path: '',
    component: DescrizioneOffertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescrizioneOffertaPageRoutingModule {}
