import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromptalertPageRoutingModule } from './promptalert-routing.module';

import { PromptalertPage } from './promptalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromptalertPageRoutingModule
  ],
  declarations: [PromptalertPage]
})
export class PromptalertPageModule {}
