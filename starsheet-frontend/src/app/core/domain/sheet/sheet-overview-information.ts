import {MemberId} from "../member/member-id";
import {SheetId} from "./sheet-id";

export class SheetOverviewInformation {
  constructor(public id: SheetId,
              public name: string,
              public description: string,
              public owner: MemberId){}
}
