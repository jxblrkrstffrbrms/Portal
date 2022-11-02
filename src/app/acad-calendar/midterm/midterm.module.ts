import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidtermPageRoutingModule } from './midterm-routing.module';

import { MidtermPage } from './midterm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidtermPageRoutingModule
  ],
  declarations: [MidtermPage]
})
export class MidtermPageModule {}
