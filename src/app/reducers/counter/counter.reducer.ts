import { Action } from '@ngrx/store';
import * as counter from './counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case counter.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case counter.DECREMENT:
      if (state.count > 0) {
        return Object.assign({}, state, { count: state.count - 1 });
      }
      return state;
    case counter.RESET:
      return Object.assign({}, state, { count: 0 });
    default:
      return state;
  }
}

/**
 * Selectors
 */
export const getCount = (state: State) => state.count;
