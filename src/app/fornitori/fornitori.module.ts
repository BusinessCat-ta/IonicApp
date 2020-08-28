import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornitoriPageRoutingModule } from './fornitori-routing.module';

import { FornitoriPage } from './fornitori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornitoriPageRoutingModule
  ],
  declarations: [FornitoriPage]
})
export class FornitoriPageModule {}
