import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendPage } from './attend.page';

const routes: Routes = [
  {
    path: '',
    component: AttendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendPageRoutingModule {}
