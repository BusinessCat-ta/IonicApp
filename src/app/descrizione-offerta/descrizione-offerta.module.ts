import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescrizioneOffertaPageRoutingModule } from './descrizione-offerta-routing.module';

import { DescrizioneOffertaPage } from './descrizione-offerta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescrizioneOffertaPageRoutingModule
  ],
  declarations: [DescrizioneOffertaPage]
})
export class DescrizioneOffertaPageModule {}
