import {Routes} from "@angular/router";
import {UserRegistrationComponent} from "./user/user-registration/user-registration.component";
import {MemberAuthenticationComponent} from "./member/member-authentication/member-authentication.component";
import {SplashComponent} from "./splash/splash.component";

export const appRoutes: Routes = [
  {path: 'user/registration', component: UserRegistrationComponent},
  {path: 'member/authentication', component: MemberAuthenticationComponent},
  {path: 'splash', component: SplashComponent},
  {path: '', redirectTo: 'splash', pathMatch: 'full'}
];
