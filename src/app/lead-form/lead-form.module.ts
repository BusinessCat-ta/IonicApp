import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadFormPageRoutingModule } from './lead-form-routing.module';

import { LeadFormPage } from './lead-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadFormPageRoutingModule
  ],
  declarations: [LeadFormPage]
})
export class LeadFormPageModule {}
