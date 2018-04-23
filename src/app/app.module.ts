import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';

import { RegistrationComponent } from './registration/registration.component';
import {RegistrationService} from './registration/registration.service';


import { NgbdModalBasic } from './regmodal/regmodal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LoginService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
