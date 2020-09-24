import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxalertPageRoutingModule } from './checkboxalert-routing.module';

import { CheckboxalertPage } from './checkboxalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxalertPageRoutingModule
  ],
  declarations: [CheckboxalertPage]
})
export class CheckboxalertPageModule {}
