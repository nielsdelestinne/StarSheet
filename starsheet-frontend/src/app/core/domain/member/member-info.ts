import {MemberId} from "./member-id";

export class MemberInfo {

  constructor(public id: MemberId,
              public email: string,
              public username: string) {
  }

}
