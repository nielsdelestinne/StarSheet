import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-ability-score-line]',
  templateUrl: './ability-score-line.component.html',
  styleUrls: ['./ability-score-line.component.css']
})
export class AbilityScoreLineComponent implements OnInit {

  @Input() abilityType: string;
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<number>();
  @Input() upgradedScore: number;

  modifier: number;
  upgradedModifier: number;

  constructor() {
  }

  ngOnInit() {
    this.modifier = 0;
    this.upgradedModifier = 0;
  }

  onScoreChange() : void {
    this.recalculateModifier();
    this.scoreChange.emit(this.score);
  }

  onUpgradedScoreChange() : void {
    this.recalculateUpgradedModifier();
  }

  private recalculateModifier() {
    this.modifier = Math.floor((this.score - 10) / 2);
  }

  private recalculateUpgradedModifier() {
    this.upgradedModifier = Math.floor((this.upgradedScore - 10) / 2);
  }

}
