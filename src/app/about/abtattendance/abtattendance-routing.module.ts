import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbtattendancePage } from './abtattendance.page';

const routes: Routes = [
  {
    path: '',
    component: AbtattendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbtattendancePageRoutingModule {}
