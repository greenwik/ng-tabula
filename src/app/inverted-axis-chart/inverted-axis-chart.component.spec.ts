import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedAxisChartComponent } from './inverted-axis-chart.component';

describe('InvertedAxisChartComponent', () => {
  let component: InvertedAxisChartComponent;
  let fixture: ComponentFixture<InvertedAxisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedAxisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedAxisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
