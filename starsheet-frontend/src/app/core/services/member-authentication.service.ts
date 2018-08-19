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
    return of(new MemberInfo(new MemberId(), memberCredentials.email, 'JustTestUser007'))
  }

}
