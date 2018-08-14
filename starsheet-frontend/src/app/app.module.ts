import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MemberAuthenticationComponent } from './member/member-authentication/member-authentication.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { SplashComponent } from './splash/splash.component';
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MemberAuthenticationComponent,
    UserRegistrationComponent,
    SplashComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
