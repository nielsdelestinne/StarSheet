import { Injectable } from '@angular/core';
import {MemberCredentials} from "../domain/member/member-credentials";
import {MemberInfo} from "../domain/member/member-info";
import {Observable, of} from "rxjs";
import {MemberId} from "../domain/member/member-id";

@Injectable({
  providedIn: 'root'
})
export class MemberAuthenticationService {

  constructor() { }

  authenticate(memberCredentials : MemberCredentials): Observable<MemberInfo>{
    return of(this.dummyMemberInfo());
  }

  getAuthenticatedMemberInfo(): MemberInfo {
    return this.dummyMemberInfo();
  }

  private dummyMemberInfo() : MemberInfo {
    return new MemberInfo(new MemberId(), "some@email.com", 'JustTestUser007')
  }

}
