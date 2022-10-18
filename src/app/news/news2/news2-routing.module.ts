import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { News2Page } from './news2.page';

const routes: Routes = [
  {
    path: '',
    component: News2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class News2PageRoutingModule {}
