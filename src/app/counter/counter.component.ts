import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getCounterValue } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import { DecrementAction, IncrementAction, ResetAction } from '../reducers/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounterValue);
  }

  increment(): void {
    this.store.dispatch(new IncrementAction());
  }

  decrement(): void {
    this.store.dispatch(new DecrementAction());
  }

  reset(): void {
    this.store.dispatch(new ResetAction());
  }
}
