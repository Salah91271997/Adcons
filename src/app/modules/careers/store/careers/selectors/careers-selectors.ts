import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CareersState } from '../reducers/careers-reducers';

export const selectCareersState =
  createFeatureSelector<CareersState>('Careers');

export const selectCareersContent = createSelector(
  selectCareersState,
  (state) => state.careers
);
