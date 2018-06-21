import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAreaComponent } from './negative-area.component';

describe('NegativeAreaComponent', () => {
  let component: NegativeAreaComponent;
  let fixture: ComponentFixture<NegativeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
