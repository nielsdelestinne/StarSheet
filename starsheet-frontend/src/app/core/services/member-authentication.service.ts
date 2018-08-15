import { Injectable } from '@angular/core';
import {MemberCredentials} from "../domain/member/member-credentials";
import {MemberInfo} from "../domain/member/member-info";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberAuthenticationService {

  constructor() { }

  authenticate(memberCredentials : MemberCredentials): Observable<MemberInfo>{
    return of(new MemberInfo(MemberAuthenticationService.randomId(), memberCredentials.email, 'JustTestUser007'))
  }

  /**
   * Method for generating a random id
   * @returns {string} a random id
   */
  private static randomId() : string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
