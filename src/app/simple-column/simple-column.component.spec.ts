import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColumnComponent } from './simple-column.component';

describe('SimpleColumnComponent', () => {
  let component: SimpleColumnComponent;
  let fixture: ComponentFixture<SimpleColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
