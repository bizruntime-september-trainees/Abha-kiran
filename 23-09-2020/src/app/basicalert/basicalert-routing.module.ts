import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicalertPage } from './basicalert.page';

const routes: Routes = [
  {
    path: '',
    component: BasicalertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicalertPageRoutingModule {}
