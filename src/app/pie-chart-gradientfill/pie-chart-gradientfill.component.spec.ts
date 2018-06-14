import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartGradientfillComponent } from './pie-chart-gradientfill.component';

describe('PieChartGradientfillComponent', () => {
  let component: PieChartGradientfillComponent;
  let fixture: ComponentFixture<PieChartGradientfillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartGradientfillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartGradientfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
