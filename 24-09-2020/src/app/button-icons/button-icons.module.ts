import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonIconsPageRoutingModule } from './button-icons-routing.module';

import { ButtonIconsPage } from './button-icons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonIconsPageRoutingModule
  ],
  declarations: [ButtonIconsPage]
})
export class ButtonIconsPageModule {}
