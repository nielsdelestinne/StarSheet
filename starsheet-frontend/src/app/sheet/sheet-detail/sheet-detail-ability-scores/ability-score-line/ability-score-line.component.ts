import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-ability-score-line]',
  templateUrl: './ability-score-line.component.html',
  styleUrls: ['./ability-score-line.component.css']
})
export class AbilityScoreLineComponent implements OnInit {

  @Input() abilityType: string;
  @Input() abilityScoresForType: any;
  @Output() abilityScoresForTypeChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onScoreChange() : void {
    this.recalculateModifier();
    this.abilityScoresForTypeChange.emit(this.abilityScoresForType);
  }

  onUpgradedScoreChange() : void {
    this.recalculateUpgradedModifier();
  }

  private recalculateModifier() {
    this.abilityScoresForType.modifier = Math.floor((this.abilityScoresForType.score - 10) / 2);
  }

  private recalculateUpgradedModifier() {
    this.abilityScoresForType.upgradedModifier = Math.floor((this.abilityScoresForType.upgradedScore - 10) / 2);
  }

}
