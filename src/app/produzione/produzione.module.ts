import { DistintaComponent } from './distinta/distinta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduzionePageRoutingModule } from './produzione-routing.module';

import { ProduzionePage } from './produzione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduzionePageRoutingModule
  ],
  declarations: [ProduzionePage, DistintaComponent]
})
export class ProduzionePageModule {}
