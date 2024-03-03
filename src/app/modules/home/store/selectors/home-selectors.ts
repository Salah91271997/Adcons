import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../reducers/home-reducers';

export const selectHomeFeatureSelector =
  createFeatureSelector<HomeState>('home');

export const selectHome = createSelector(
  selectHomeFeatureSelector,
  (state) => state.home
);

export const selectHomeloaded = createSelector(
  selectHomeFeatureSelector,
  (state) => state.loaded
);
