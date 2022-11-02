import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidtermPage } from './midterm.page';

const routes: Routes = [
  {
    path: '',
    component: MidtermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidtermPageRoutingModule {}
