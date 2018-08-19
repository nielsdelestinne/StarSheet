import {Routes} from "@angular/router";
import {UserRegistrationComponent} from "./user/user-registration/user-registration.component";
import {MemberAuthenticationComponent} from "./member/member-authentication/member-authentication.component";
import {SplashComponent} from "./splash/splash.component";
import {SheetOverviewComponent} from "./sheet/sheet-overview/sheet-overview.component";
import {MemberAuthenticationGuard} from "./core/guards/member-authentication.guard";
import {SheetDetailComponent} from "./sheet/sheet-detail/sheet-detail.component";

export const appRoutes: Routes = [
  {path: 'user/registration', component: UserRegistrationComponent},
  {path: 'member/authentication', component: MemberAuthenticationComponent},
  {path: 'splash', component: SplashComponent},
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'sheet', canActivate: [MemberAuthenticationGuard], children : [
    {path: 'overview', component: SheetOverviewComponent},
    {path: 'detail/:sheetId', component: SheetDetailComponent},
  ]}
];
