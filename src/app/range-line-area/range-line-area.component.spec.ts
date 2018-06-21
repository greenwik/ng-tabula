import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLineAreaComponent } from './range-line-area.component';

describe('RangeLineAreaComponent', () => {
  let component: RangeLineAreaComponent;
  let fixture: ComponentFixture<RangeLineAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeLineAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLineAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
