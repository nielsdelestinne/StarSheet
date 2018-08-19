import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDetailCharacterInfoComponent } from './sheet-detail-character-info.component';

describe('SheetDetailCharacterInfoComponent', () => {
  let component: SheetDetailCharacterInfoComponent;
  let fixture: ComponentFixture<SheetDetailCharacterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetDetailCharacterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetDetailCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
