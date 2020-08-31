import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpportunitaPageRoutingModule } from './opportunita-routing.module';

import { OpportunitaPage } from './opportunita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpportunitaPageRoutingModule
  ],
  declarations: [OpportunitaPage]
})
export class OpportunitaPageModule {}
