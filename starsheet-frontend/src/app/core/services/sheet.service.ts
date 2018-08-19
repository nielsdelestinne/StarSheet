import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs/index";
import {MemberId} from "../domain/member/member-id";
import {SheetOverviewInformation} from "../domain/sheet/sheet-overview-information";
import {SheetId} from "../domain/sheet/sheet-id";

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor() {
  }

  getAllSheetsForMemberId(memberId: MemberId): Observable<SheetOverviewInformation[]> {
    return of([
      new SheetOverviewInformation(new SheetId("99f8626a-84c8-419d-ad4d-fadb740464c1"), "Chip (Leuven)", "Playing with the starfinder guys from Leuven", memberId),
      new SheetOverviewInformation(new SheetId("778e7ccb-9ccd-4f39-b4d5-61178134d0f5"), "Torux", "Charactersheet for some other group", memberId),
      new SheetOverviewInformation(new SheetId("61166f55-61ca-476e-98a3-9723371ae1f9"), "Brutus V", "Work in progress", memberId),
      new SheetOverviewInformation(new SheetId("c3e14a87-0100-4fa1-ab92-8bfecdb86c4c"), "Drakus", "A Dragon-like character", memberId),
    ])
  }
}
