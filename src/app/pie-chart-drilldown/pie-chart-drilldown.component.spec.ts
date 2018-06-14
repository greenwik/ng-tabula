import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDrilldownComponent } from './pie-chart-drilldown.component';

describe('PieChartDrilldownComponent', () => {
  let component: PieChartDrilldownComponent;
  let fixture: ComponentFixture<PieChartDrilldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartDrilldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
