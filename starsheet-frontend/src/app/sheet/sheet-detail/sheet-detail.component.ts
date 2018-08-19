import { Component, OnInit } from '@angular/core';
import {SheetId} from "../../core/domain/sheet/sheet-id";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sheet-detail',
  templateUrl: './sheet-detail.component.html',
  styleUrls: ['./sheet-detail.component.css']
})
export class SheetDetailComponent implements OnInit {

  public sheetId: SheetId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sheetId = new SheetId(params['sheetId']);
    });

  }

}
