import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrmPagePageRoutingModule } from './crm-page-routing.module';

import { CrmPagePage } from './crm-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrmPagePageRoutingModule
  ],
  declarations: [CrmPagePage]
})
export class CrmPagePageModule {}
