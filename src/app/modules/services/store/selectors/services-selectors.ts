import { createSelector, createFeatureSelector } from '@ngrx/store';
import { servicesState } from '../reducers/services-reducers';
import { memoize } from 'lodash';
export const serviceFeatureSelector =
  createFeatureSelector<servicesState>('services');

export const getAllServices = createSelector(
  serviceFeatureSelector,
  (state) => state.services
);

export const getservicesLoaded = createSelector(
  serviceFeatureSelector,
  (state) => state?.servicesLoaded
);
export const selectFilteredServices = memoize((id: string) =>
  createSelector(serviceFeatureSelector, (state) =>
    state.services?.services.filter((service) => service.id !== id)
  )
);
