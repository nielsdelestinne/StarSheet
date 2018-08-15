import {Component, OnInit} from '@angular/core';
import {MemberAuthenticationService} from "../../core/services/member-authentication.service";
import {MemberCredentials} from "../../core/domain/member/member-credentials";
import {Router} from "@angular/router";

@Component({
  selector: 'app-member-authentication',
  templateUrl: './member-authentication.component.html',
  styleUrls: ['./member-authentication.component.css']
})
export class MemberAuthenticationComponent implements OnInit {

  protected memberCredentials: MemberCredentials;
  protected isSubmitted: boolean;

  constructor(private memberAuthenticationService: MemberAuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.isSubmitted = false;
    this.memberCredentials = {email: "", password: ""};
  }

  onSubmit() {
    this.isSubmitted = true;
    this.memberAuthenticationService
      .authenticate(this.memberCredentials)
      .subscribe(memberInfo => {
        this.router.navigate(['/sheet/overview']);
      })
  }

}
