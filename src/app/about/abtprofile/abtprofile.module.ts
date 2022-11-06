import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbtprofilePageRoutingModule } from './abtprofile-routing.module';

import { AbtprofilePage } from './abtprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbtprofilePageRoutingModule
  ],
  declarations: [AbtprofilePage]
})
export class AbtprofilePageModule {}
