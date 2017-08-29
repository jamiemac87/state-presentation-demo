import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterImperativeComponent } from './counter-imperative.component';

describe('CounterImperativeComponent', () => {
  let component: CounterImperativeComponent;
  let fixture: ComponentFixture<CounterImperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterImperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
