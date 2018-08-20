import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbilityScores} from "../../../core/domain/sheet/abilities/ability-scores";

@Component({
  selector: 'app-sheet-detail-ability-scores',
  templateUrl: './sheet-detail-ability-scores.component.html',
  styleUrls: ['./sheet-detail-ability-scores.component.css']
})
export class SheetDetailAbilityScoresComponent implements OnInit {

  @Input() allAbilityScores: any;
  @Output() allAbilityScoresChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  debugInfo(): string {
    return JSON.stringify(this.allAbilityScores);
  }

  emitUpdate() {
    this.allAbilityScoresChange.emit(this.createNewAllAbilityScores());
  }

  /**
   * TODO: Refactor
   * We map the allAbilityScores content to a 'new' object. Otherwise, it is not detected
   * by Angular as changed, thus not updating in the skills component.
   * As of now, feels like a hack. To inspect and refactor.
   * */
  createNewAllAbilityScores() {
    return {
      strength: this.allAbilityScores.strength,
      dexterity: this.allAbilityScores.dexterity,
      constitution: this.allAbilityScores.constitution,
      intelligence: this.allAbilityScores.intelligence,
      wisdom: this.allAbilityScores.wisdom,
      charisma: this.allAbilityScores.charisma
    };
  }
}
