import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendPageRoutingModule } from './attend-routing.module';

import { AttendPage } from './attend.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AttendPage]
})
export class AttendPageModule {}
