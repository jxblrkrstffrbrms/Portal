import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondsemPageRoutingModule } from './secondsem-routing.module';

import { SecondsemPage } from './secondsem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondsemPageRoutingModule
  ],
  declarations: [SecondsemPage]
})
export class SecondsemPageModule {}
