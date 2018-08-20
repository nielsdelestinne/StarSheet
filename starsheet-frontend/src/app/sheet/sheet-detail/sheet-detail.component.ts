import { Component, OnInit } from '@angular/core';
import {SheetId} from "../../core/domain/sheet/sheet-id";
import {ActivatedRoute} from "@angular/router";
import {AbilityScores} from "../../core/domain/sheet/abilities/ability-scores";

@Component({
  selector: 'app-sheet-detail',
  templateUrl: './sheet-detail.component.html',
  styleUrls: ['./sheet-detail.component.css']
})
export class SheetDetailComponent implements OnInit {

  public sheetId: SheetId;
  public allAbilityScores: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sheetId = new SheetId(params['sheetId']);
    });
    this.initializeAllAbilityScores();
  }

  private initializeAllAbilityScores() {
    this.allAbilityScores = {
      strength: new AbilityScores(0, 0, 0, 0),
      dexterity: new AbilityScores(0, 0, 0, 0),
      constitution: new AbilityScores(0, 0, 0, 0),
      intelligence: new AbilityScores(0, 0, 0, 0),
      wisdom: new AbilityScores(0, 0, 0, 0),
      charisma: new AbilityScores(0, 0, 0, 0)
    };
  }

}
