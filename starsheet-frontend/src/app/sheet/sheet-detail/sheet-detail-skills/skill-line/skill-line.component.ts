import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-skill-line]',
  templateUrl: './skill-line.component.html',
  styleUrls: ['./skill-line.component.css']
})
export class SkillLineComponent implements OnInit {

  @Input() skillType: string;
  @Input() skillsForType: any;
  @Output() skillsForTypeChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onRanksChange() {
    this.onChangeOfSkill();
  }

  onClassBonusChange() {
    this.onChangeOfSkill();
  }

  onMiscModChange() {
    this.onChangeOfSkill();
  }

  private onChangeOfSkill() {
    this.recalculateTotal();
    this.skillsForTypeChange.emit(this.skillsForType);
  }

  private recalculateTotal() {
    this.skillsForType.total = this.skillsForType.ranks
      + this.skillsForType.classBonus
      + this.skillsForType.abilityMod
      + this.skillsForType.miscMod;
  }

}
