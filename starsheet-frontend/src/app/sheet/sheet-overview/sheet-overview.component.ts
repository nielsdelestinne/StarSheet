import { Component, OnInit } from '@angular/core';
import {SheetService} from "../../core/services/sheet.service";
import {MemberAuthenticationService} from "../../core/services/member-authentication.service";
import {SheetOverviewInformation} from "../../core/domain/sheet/sheet-overview-information";
import {SheetId} from "../../core/domain/sheet/sheet-id";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sheet-overview',
  templateUrl: './sheet-overview.component.html',
  styleUrls: ['./sheet-overview.component.css']
})
export class SheetOverviewComponent implements OnInit {

  protected sheets: SheetOverviewInformation[];

  constructor(private sheetService: SheetService,
              private memberAuthService: MemberAuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.sheetService
      .getAllSheetsForMemberId(this.memberAuthService.getAuthenticatedMemberInfo().id)
      .subscribe(sheets => this.sheets = sheets);
  }

  navigateToDetail(sheetId: SheetId) {
    this.router.navigate(['/sheet/detail', sheetId.id]);
  }
}
