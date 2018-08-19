import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreLineComponent } from './ability-score-line.component';

describe('AbilityScoreLineComponent', () => {
  let component: AbilityScoreLineComponent;
  let fixture: ComponentFixture<AbilityScoreLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityScoreLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
