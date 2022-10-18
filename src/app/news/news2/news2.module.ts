import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { News2PageRoutingModule } from './news2-routing.module';

import { News2Page } from './news2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    News2PageRoutingModule
  ],
  declarations: [News2Page]
})
export class News2PageModule {}
