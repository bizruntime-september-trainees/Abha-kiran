import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonfabbuttonPage } from './ionfabbutton.page';

const routes: Routes = [
  {
    path: '',
    component: IonfabbuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonfabbuttonPageRoutingModule {}
