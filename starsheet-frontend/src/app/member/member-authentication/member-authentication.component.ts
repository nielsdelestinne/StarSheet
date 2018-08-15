import { Component, OnInit } from '@angular/core';
import {MemberAuthenticationService} from "../../core/services/member-authentication.service";
import {MemberCredentials} from "../../core/domain/member/member-credentials";

@Component({
  selector: 'app-member-authentication',
  templateUrl: './member-authentication.component.html',
  styleUrls: ['./member-authentication.component.css']
})
export class MemberAuthenticationComponent implements OnInit {

  protected memberCredentials: MemberCredentials;
  protected isSubmitted: boolean;

  constructor(private memberAuthenticationService: MemberAuthenticationService) { }

  ngOnInit() {
      this.isSubmitted = false;
      this.memberCredentials = {email: "", password: ""};
  }

  onSubmit() {
    this.isSubmitted = true;
    this.memberAuthenticationService
      .authenticate(this.memberCredentials)
      .subscribe(memberInfo => {
        // route to new page
      })
  }

}
