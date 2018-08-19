import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

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
    this.abilityScores = {strength: {}};
    this.abilityScores.strength = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
  }

  recalculateModifier() {
    this.abilityScores.strength.modifier =  Math.floor((this.abilityScores.strength.score - 10) / 2);
  }

  recalculateUpgradedModifier() {
    this.abilityScores.strength.upgradedModifier =  Math.floor((this.abilityScores.strength.upgradedScore - 10) / 2);
  }

}
