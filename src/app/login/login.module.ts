import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [TabsPage],
  declarations: [LoginPage]
})
export class LoginPageModule {}
