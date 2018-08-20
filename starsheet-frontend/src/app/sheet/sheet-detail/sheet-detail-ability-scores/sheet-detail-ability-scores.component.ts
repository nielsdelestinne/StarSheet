import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
    this.allAbilityScoresChange.emit(this.allAbilityScores);
  }
}
