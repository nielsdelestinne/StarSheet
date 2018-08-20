import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sheet-detail-skills',
  templateUrl: './sheet-detail-skills.component.html',
  styleUrls: ['./sheet-detail-skills.component.css']
})
export class SheetDetailSkillsComponent implements OnChanges, OnInit {

  @Input() allAbilityScores : any;

  protected skills : any;

  constructor() { }

  ngOnInit() {
    this.initializeSkills();
  }

  /**
   * TODO: Detect what kind of change (is allAbilityScores modifier is changed)
   */
  ngOnChanges(changes: SimpleChanges): void {
    if(this.skills) {
      this.reinitializeModifiers();
    }
  }

  private initializeSkills() : void {
    this.skills = {
      acrobatics: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.dexterity.modifier, miscMod: 0},
      athletics: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.strength.modifier, miscMod: 0},
      bluff: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.charisma.modifier, miscMod: 0},
      computers: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      culture: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      diplomacy: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.charisma.modifier, miscMod: 0},
      disguise: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.charisma.modifier, miscMod: 0},
      engineering: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      intimidate: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.charisma.modifier, miscMod: 0},
      lifeScience: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      medicine: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      mysticism: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.wisdom.modifier, miscMod: 0},
      perception: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.wisdom.modifier, miscMod: 0},
      physicalScience: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.intelligence.modifier, miscMod: 0},
      piloting: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.dexterity.modifier, miscMod: 0},
      profession: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.charisma.modifier, miscMod: 0},
      senseMotive: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.wisdom.modifier, miscMod: 0},
      sleightOfHand: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.dexterity.modifier, miscMod: 0},
      stealth: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.dexterity.modifier, miscMod: 0},
      survival: {total: 0, ranks: 0, classBonus: 0, abilityMod: this.allAbilityScores.wisdom.modifier, miscMod: 0},
    };
  }

  private reinitializeModifiers() : void {
    this.skills.acrobatics.abilityMod = this.allAbilityScores.dexterity.modifier;
    this.skills.athletics.abilityMod = this.allAbilityScores.strength.modifier;
    this.skills.bluff.abilityMod = this.allAbilityScores.charisma.modifier;
    this.skills.computers.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.culture.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.diplomacy.abilityMod = this.allAbilityScores.charisma.modifier;
    this.skills.disguise.abilityMod = this.allAbilityScores.charisma.modifier;
    this.skills.engineering.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.intimidate.abilityMod = this.allAbilityScores.charisma.modifier;
    this.skills.lifeScience.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.medicine.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.mysticism.abilityMod = this.allAbilityScores.wisdom.modifier;
    this.skills.perception.abilityMod = this.allAbilityScores.wisdom.modifier;
    this.skills.physicalScience.abilityMod = this.allAbilityScores.intelligence.modifier;
    this.skills.piloting.abilityMod = this.allAbilityScores.dexterity.modifier;
    this.skills.profession.abilityMod = this.allAbilityScores.charisma.modifier;
    this.skills.senseMotive.abilityMod = this.allAbilityScores.wisdom.modifier;
    this.skills.sleightOfHand.abilityMod = this.allAbilityScores.dexterity.modifier;
    this.skills.stealth.abilityMod = this.allAbilityScores.dexterity.modifier;
    this.skills.survival.abilityMod = this.allAbilityScores.wisdom.modifier;
  }

  debugInfo(): string {
    return JSON.stringify(this.allAbilityScores);
  }

}
