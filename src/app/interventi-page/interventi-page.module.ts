import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterventiPagePageRoutingModule } from './interventi-page-routing.module';

import { InterventiPagePage } from './interventi-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterventiPagePageRoutingModule
  ],
  declarations: [InterventiPagePage]
})
export class InterventiPagePageModule {}
