import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentidPageRoutingModule } from './studentid-routing.module';

import { StudentidPage } from './studentid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentidPageRoutingModule
  ],
  declarations: [StudentidPage]
})
export class StudentidPageModule {}
