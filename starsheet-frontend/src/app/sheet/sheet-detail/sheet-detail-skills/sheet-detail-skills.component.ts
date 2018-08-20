import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-detail-skills',
  templateUrl: './sheet-detail-skills.component.html',
  styleUrls: ['./sheet-detail-skills.component.css']
})
export class SheetDetailSkillsComponent implements OnInit {

  protected skills : any;

  constructor() { }

  ngOnInit() {
    this.initializeSkills();
  }

  private initializeSkills() : void {
    this.skills = {
      acrobatics: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      athletics: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      bluff: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      computers: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      culture: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      diplomacy: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      disguise: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      engineering: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      intimidate: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      lifeScience: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      medicine: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      mysticism: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      perception: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      physicalScience: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      piloting: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      profession: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      senseMotive: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      sleightOfHand: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      stealth: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
      survival: {total: 0, ranks: 0, classBonus: 0, abilityMod: 0, miscMod: 0},
    };
  }

}
