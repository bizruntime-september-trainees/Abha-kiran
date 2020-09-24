import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicalertPageRoutingModule } from './basicalert-routing.module';

import { BasicalertPage } from './basicalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicalertPageRoutingModule
  ],
  declarations: [BasicalertPage]
})
export class BasicalertPageModule {}
