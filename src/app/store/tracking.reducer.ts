import { createReducer, on } from '@ngrx/store';
import { incrementarContador } from './tracking.actions';

export interface TrackingState {
  contadores: { [key: string]: number };
}

export const initialState: TrackingState = {
  contadores: {}
};

export const trackingReducer = createReducer(
  initialState,
  on(incrementarContador, (state, { tag }) => ({
    ...state,
    contadores: {
      ...state.contadores,
      [tag]: (state.contadores[tag] || 0) + 1
    }
  }))
);