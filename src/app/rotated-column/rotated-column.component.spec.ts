import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatedColumnComponent } from './rotated-column.component';

describe('RotatedColumnComponent', () => {
  let component: RotatedColumnComponent;
  let fixture: ComponentFixture<RotatedColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatedColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatedColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
