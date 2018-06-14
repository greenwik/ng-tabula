import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeBarComponent } from './negative-bar.component';

describe('NegativeBarComponent', () => {
  let component: NegativeBarComponent;
  let fixture: ComponentFixture<NegativeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
