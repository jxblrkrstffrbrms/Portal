import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbtgradesPageRoutingModule } from './abtgrades-routing.module';

import { AbtgradesPage } from './abtgrades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbtgradesPageRoutingModule
  ],
  declarations: [AbtgradesPage]
})
export class AbtgradesPageModule {}
