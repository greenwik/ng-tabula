import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrRegularTimeChartComponent } from './ir-regular-time-chart.component';

describe('IrRegularTimeChartComponent', () => {
  let component: IrRegularTimeChartComponent;
  let fixture: ComponentFixture<IrRegularTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrRegularTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrRegularTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
