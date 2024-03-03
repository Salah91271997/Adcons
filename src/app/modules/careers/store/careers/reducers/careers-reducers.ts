import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Careers } from '../../../interfaces/careers';
import { CareersActions } from '../actions/careers-type';
export interface CareersState {
  careers: Careers | null;
  loaded: boolean;
}

export const initState: CareersState = {
  careers: null,
  loaded: false,
};

export const careersReducer = createReducer(
  initState,
  on(CareersActions.loadCareers, (state, action) => {
    return {
      ...state,
    };
  }),
  on(CareersActions.careersLoaded, (state, action) => {
    return action.careers
      ? {
          ...state,
          loaded: true,
          careers: action.careers,
        }
      : { ...state };
  }),
  on(CareersActions.loadCarrersListNext, (state, action) => {
    return {
      ...state,
    };
  }),
  on(CareersActions.carrersListNextLoaded, (state, action) => {
    if (!action.careers) {
      return { ...state };
    }
    const newState = cloneDeep(state);
    newState.careers?.careers.results.push(...action.careers.results);
    if (newState.careers) {
      newState.careers.careers.next = action.careers.next;
    }
    return newState;
  })
);
