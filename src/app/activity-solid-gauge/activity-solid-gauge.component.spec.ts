import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySolidGaugeComponent } from './activity-solid-gauge.component';

describe('ActivitySolidGaugeComponent', () => {
  let component: ActivitySolidGaugeComponent;
  let fixture: ComponentFixture<ActivitySolidGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySolidGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySolidGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
