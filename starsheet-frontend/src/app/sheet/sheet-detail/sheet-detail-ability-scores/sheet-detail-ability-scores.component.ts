import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbilityScores} from "../../../core/domain/sheet/abilities/ability-scores";

@Component({
  selector: 'app-sheet-detail-ability-scores',
  templateUrl: './sheet-detail-ability-scores.component.html',
  styleUrls: ['./sheet-detail-ability-scores.component.css']
})
export class SheetDetailAbilityScoresComponent implements OnInit {

  protected abilityScores;

  constructor() {
  }

  ngOnInit() {
    this.initializeAbilityScores();
  }

  private initializeAbilityScores() {
    this.abilityScores = {
      strength: new AbilityScores(0, 0, 0, 0),
      dexterity: new AbilityScores(0, 0, 0, 0),
      constitution: new AbilityScores(0, 0, 0, 0),
      intelligence: new AbilityScores(0, 0, 0, 0),
      wisdom: new AbilityScores(0, 0, 0, 0),
      charisma: new AbilityScores(0, 0, 0, 0)
    };
  }

  logInfo(): void {
    console.log(this.abilityScores);
  }

}
