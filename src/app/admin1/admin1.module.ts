import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admin1PageRoutingModule } from './admin1-routing.module';

import { Admin1Page } from './admin1.page';
import { LocalNotifications } from '@capacitor/local-notifications';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admin1PageRoutingModule,
    HttpClientModule,
  ],
  providers: [TabsPage],
  declarations: [Admin1Page]
})
export class Admin1PageModule {}
