import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDownColumnComponent } from './drill-down-column.component';

describe('DrillDownColumnComponent', () => {
  let component: DrillDownColumnComponent;
  let fixture: ComponentFixture<DrillDownColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillDownColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillDownColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
