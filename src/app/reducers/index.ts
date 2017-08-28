import * as fromCounter from './counter/counter.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

// Selectors
export const getCounterState = (state: AppState) => state.counter;
export const getCounterValue = createSelector(getCounterState, fromCounter.getCount);
