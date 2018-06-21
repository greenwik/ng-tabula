import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedAreaComponent } from './inverted-area.component';

describe('InvertedAreaComponent', () => {
  let component: InvertedAreaComponent;
  let fixture: ComponentFixture<InvertedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
