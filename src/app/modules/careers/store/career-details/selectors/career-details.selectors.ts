import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
import { CareersDetailsState } from '../reducers/career-details.reducers';

export const selectCareersDetailsState =
  createFeatureSelector<CareersDetailsState>('CareerDetails');

export const selectCareersDetailsLoader = memoize((id: string) =>
  createSelector(
    selectCareersDetailsState,
    (state) => state.careerDetailsDict[id]?.loaded
  )
);
export const selectCareersDetailsContent = memoize((id: string) =>
  createSelector(
    selectCareersDetailsState,
    (state) => state.careerDetailsDict[id]
  )
);
