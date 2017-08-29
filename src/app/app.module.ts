import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { reducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterImperativeComponent } from './counter-imperative/counter-imperative.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterImperativeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
