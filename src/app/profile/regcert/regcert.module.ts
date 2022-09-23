import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegcertPageRoutingModule } from './regcert-routing.module';

import { RegcertPage } from './regcert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegcertPageRoutingModule
  ],
  declarations: [RegcertPage]
})
export class RegcertPageModule {}
