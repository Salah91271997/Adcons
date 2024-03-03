import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductFilters } from '../../../interfaces/projects';

export const selectProjectFilterState =
  createFeatureSelector<ProductFilters>('projectsFilter');
export const selectProjectFilter = createSelector(
  selectProjectFilterState,
  (projectFilterState) => {
    return projectFilterState;
  }
);
