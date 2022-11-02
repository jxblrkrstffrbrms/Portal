import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstsemPage } from './firstsem.page';

const routes: Routes = [
  {
    path: '',
    component: FirstsemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstsemPageRoutingModule {}
