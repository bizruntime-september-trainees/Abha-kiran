import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonfabbuttonPageRoutingModule } from './ionfabbutton-routing.module';

import { IonfabbuttonPage } from './ionfabbutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonfabbuttonPageRoutingModule
  ],
  declarations: [IonfabbuttonPage]
})
export class IonfabbuttonPageModule {}
