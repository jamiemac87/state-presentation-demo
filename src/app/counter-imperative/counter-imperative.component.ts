import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-imperative',
  templateUrl: './counter-imperative.component.html',
  styleUrls: ['./counter-imperative.component.css']
})
export class CounterImperativeComponent {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter <= 0) {
      return;
    }

    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }

}
