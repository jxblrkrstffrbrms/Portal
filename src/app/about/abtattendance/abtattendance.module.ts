import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbtattendancePageRoutingModule } from './abtattendance-routing.module';

import { AbtattendancePage } from './abtattendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbtattendancePageRoutingModule
  ],
  declarations: [AbtattendancePage]
})
export class AbtattendancePageModule {}
