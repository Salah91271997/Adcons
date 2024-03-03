import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
import { ServiceDetailsState } from '../reducers/service-details-reducers';

export const selectServiceDetailsState =
  createFeatureSelector<ServiceDetailsState>('ServiceDetails');

export const selectServiceDetails = memoize((id: string) =>
  createSelector(selectServiceDetailsState, (state) => state.ServiceDetails[id])
);

export const selectServiceDetailsLoader = memoize((id: string) =>
  createSelector(
    selectServiceDetailsState,
    (state) => state.ServiceDetails[id]?.loaded
  )
);
