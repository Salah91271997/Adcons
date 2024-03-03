import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { CareerDetails } from '../../../interfaces/careers';
import { CarrerDetailsActions } from '../actions/career-details-type';

export interface CareersDetailsState {
  careerDetailsDict: { [key: string]: CareerDetails };
}
export const initState: CareersDetailsState = {
  careerDetailsDict: {},
};

export const carrerDetailsReducer = createReducer(
  initState,
  on(CarrerDetailsActions.loadCarrerDetails, (state, action) => {
    return {
      ...state,
    };
  }),

  on(CarrerDetailsActions.carrerDetailsLoaded, (state, action) => {
    const newDict: { [key: string]: CareerDetails } = cloneDeep(
      state.careerDetailsDict
    );
    newDict[action.id] = { ...action.carrerDetails, loaded: true };

    return action.carrerDetails
      ? {
          ...state,
          careerDetailsDict: newDict,
        }
      : { ...state };
  })
);
