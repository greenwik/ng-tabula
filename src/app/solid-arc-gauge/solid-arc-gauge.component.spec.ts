import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidArcGaugeComponent } from './solid-arc-gauge.component';

describe('SolidArcGaugeComponent', () => {
  let component: SolidArcGaugeComponent;
  let fixture: ComponentFixture<SolidArcGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidArcGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidArcGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
