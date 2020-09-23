import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxalertPage } from './checkboxalert.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxalertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxalertPageRoutingModule {}
