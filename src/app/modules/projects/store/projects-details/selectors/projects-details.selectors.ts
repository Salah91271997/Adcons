import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
import { ProjectsDetailsState } from '../reducers/projects-details.reducers';

export const selectProjectsDetailsState =
  createFeatureSelector<ProjectsDetailsState>('ProjectsDetails');
export const selectProjectsDetailsContent = memoize((id: string) =>
  createSelector(
    selectProjectsDetailsState,
    (state) => state?.ProjectsDetails[id]
  )
);
export const selectProjectsDetailsLoaded = memoize((id: string) =>
  createSelector(
    selectProjectsDetailsState,
    (state) => state?.ProjectsDetails[id]?.loaded
  )
);
