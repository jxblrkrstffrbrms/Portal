import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstsemPageRoutingModule } from './firstsem-routing.module';

import { FirstsemPage } from './firstsem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstsemPageRoutingModule
  ],
  declarations: [FirstsemPage]
})
export class FirstsemPageModule {}
