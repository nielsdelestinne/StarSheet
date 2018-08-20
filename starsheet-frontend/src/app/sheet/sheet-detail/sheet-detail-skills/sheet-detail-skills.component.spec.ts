import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDetailSkillsComponent } from './sheet-detail-skills.component';

describe('SheetDetailSkillsComponent', () => {
  let component: SheetDetailSkillsComponent;
  let fixture: ComponentFixture<SheetDetailSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetDetailSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetDetailSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
