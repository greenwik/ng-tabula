import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiPieChartComponent } from './semi-pie-chart.component';

describe('SemiPieChartComponent', () => {
  let component: SemiPieChartComponent;
  let fixture: ComponentFixture<SemiPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
