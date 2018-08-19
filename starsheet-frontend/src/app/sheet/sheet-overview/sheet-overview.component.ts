import { Component, OnInit } from '@angular/core';
import {SheetService} from "../../core/services/sheet.service";
import {MemberAuthenticationService} from "../../core/services/member-authentication.service";
import {SheetOverviewInformation} from "../../core/domain/sheet/sheet-overview-information";

@Component({
  selector: 'app-sheet-overview',
  templateUrl: './sheet-overview.component.html',
  styleUrls: ['./sheet-overview.component.css']
})
export class SheetOverviewComponent implements OnInit {

  protected sheets: SheetOverviewInformation[];

  constructor(private sheetService: SheetService,
              private memberAuthService: MemberAuthenticationService) { }

  ngOnInit() {
    this.sheetService
      .getAllSheetsForMemberId(this.memberAuthService.getAuthenticatedMemberInfo().id)
      .subscribe(sheets => this.sheets = sheets);
  }

  getRandomIndexForColorBar(): number {
    return Math.floor(Math.random() * 5) + 1;
  }

}
