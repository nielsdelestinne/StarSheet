import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {MemberAuthenticationComponent} from './member/member-authentication/member-authentication.component';
import {UserRegistrationComponent} from './user/user-registration/user-registration.component';
import {SplashComponent} from './splash/splash.component';
import {appRoutes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import { SheetCreationComponent } from './sheet/sheet-creation/sheet-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberAuthenticationComponent,
    UserRegistrationComponent,
    SplashComponent,
    SheetCreationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
