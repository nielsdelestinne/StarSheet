import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetOverviewComponent } from './sheet-overview.component';

describe('SheetOverviewComponent', () => {
  let component: SheetOverviewComponent;
  let fixture: ComponentFixture<SheetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
