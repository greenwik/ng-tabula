import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAreaComponent } from './simple-area.component';

describe('SimpleAreaComponent', () => {
  let component: SimpleAreaComponent;
  let fixture: ComponentFixture<SimpleAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
