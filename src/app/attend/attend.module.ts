import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendPageRoutingModule } from './attend-routing.module';

import { AttendPage } from './attend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendPageRoutingModule
  ],
  declarations: [AttendPage]
})
export class AttendPageModule {}
