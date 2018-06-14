import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeColumnComponent } from './range-column.component';

describe('RangeColumnComponent', () => {
  let component: RangeColumnComponent;
  let fixture: ComponentFixture<RangeColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
