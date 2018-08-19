import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDetailAbilityScoresComponent } from './sheet-detail-ability-scores.component';

describe('SheetDetailAbilityScoresComponent', () => {
  let component: SheetDetailAbilityScoresComponent;
  let fixture: ComponentFixture<SheetDetailAbilityScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetDetailAbilityScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetDetailAbilityScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
