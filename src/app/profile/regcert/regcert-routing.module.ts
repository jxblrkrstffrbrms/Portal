import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegcertPage } from './regcert.page';

const routes: Routes = [
  {
    path: '',
    component: RegcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegcertPageRoutingModule {}
