import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getCounterValue } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import { DecrementAction, IncrementAction, ResetAction } from '../reducers/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // Here we tell the store that we want to watch the value/s returned from the getCounterValue
    this.counter$ = this.store.select(getCounterValue);
  }

  increment(): void {}

  decrement(): void {}

  reset(): void {}
}
