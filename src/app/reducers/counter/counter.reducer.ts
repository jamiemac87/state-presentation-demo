import { Action } from '@ngrx/store';
import * as counter from './counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

/**
 * Reducer
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Selectors
 */
export const getCount = (state: State) => state.count;
