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
    this.initializeAblityScores();
  }

  private initializeAblityScores() {
    this.abilityScores = {
      strength: {},
      dexterity: {},
      constitution: {},
      intelligence: {},
      wisdom: {},
      charisma: {},
    };
    this.abilityScores.strength = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
    this.abilityScores.dexterity = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
    this.abilityScores.constitution = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
    this.abilityScores.intelligence = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
    this.abilityScores.wisdom = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
    this.abilityScores.charisma = {score: 0, modifier: 0, upgradedScore: 0, upgradedModifier: 0};
  }

  logInfo() : void {
    console.log(this.abilityScores);
  }

}
