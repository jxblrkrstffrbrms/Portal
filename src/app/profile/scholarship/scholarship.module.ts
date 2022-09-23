import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarshipPageRoutingModule } from './scholarship-routing.module';

import { ScholarshipPage } from './scholarship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarshipPageRoutingModule
  ],
  declarations: [ScholarshipPage]
})
export class ScholarshipPageModule {}
