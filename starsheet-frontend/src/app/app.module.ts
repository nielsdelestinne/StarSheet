import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {MemberAuthenticationComponent} from './member/member-authentication/member-authentication.component';
import {UserRegistrationComponent} from './user/user-registration/user-registration.component';
import {SplashComponent} from './splash/splash.component';
import {appRoutes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import { SheetOverviewComponent } from './sheet/sheet-overview/sheet-overview.component';
import { SheetDetailComponent } from './sheet/sheet-detail/sheet-detail.component';
import { SheetDetailCharacterInfoComponent } from './sheet/sheet-detail/sheet-detail-character-info/sheet-detail-character-info.component';
import { SheetDetailAbilityScoresComponent } from './sheet/sheet-detail/sheet-detail-ability-scores/sheet-detail-ability-scores.component';
import { AbilityScoreLineComponent } from './sheet/sheet-detail/sheet-detail-ability-scores/ability-score-line/ability-score-line.component';
import { SheetDetailSkillsComponent } from './sheet/sheet-detail/sheet-detail-skills/sheet-detail-skills.component';
import { SkillLineComponent } from './sheet/sheet-detail/sheet-detail-skills/skill-line/skill-line.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberAuthenticationComponent,
    UserRegistrationComponent,
    SplashComponent,
    SheetOverviewComponent,
    SheetDetailComponent,
    SheetDetailCharacterInfoComponent,
    SheetDetailAbilityScoresComponent,
    AbilityScoreLineComponent,
    SheetDetailSkillsComponent,
    SkillLineComponent,
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
