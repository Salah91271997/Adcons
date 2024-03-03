import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectPage } from '../../../interfaces/projects';

export const selectProjectContentState =
  createFeatureSelector<ProjectPage>('projectsContent');
export const selectProjectContent = createSelector(
  selectProjectContentState,
  (projectContentState) => {
    return projectContentState;
  }
);
