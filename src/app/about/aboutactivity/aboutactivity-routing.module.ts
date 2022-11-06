import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutactivityPage } from './aboutactivity.page';

const routes: Routes = [
  {
    path: '',
    component: AboutactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutactivityPageRoutingModule {}
