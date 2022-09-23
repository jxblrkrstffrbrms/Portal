import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiabilitiesPageRoutingModule } from './liabilities-routing.module';

import { LiabilitiesPage } from './liabilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiabilitiesPageRoutingModule
  ],
  declarations: [LiabilitiesPage]
})
export class LiabilitiesPageModule {}
