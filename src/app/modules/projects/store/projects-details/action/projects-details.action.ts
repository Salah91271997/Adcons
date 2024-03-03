import { createAction, props } from '@ngrx/store';
import { ProjectsDetailsGetResponse } from '../../../interfaces/projects-details';

export const loadProjectsDetail = createAction(
  '[ProjectsDetail Component] load Projects detail ',
  props<{ id: string }>()
);
export const ProjectsDetailLoaded = createAction(
  '[ProjectsDetail Effect] Projects Detail  Loaded',
  props<{ ProjectsDetails: ProjectsDetailsGetResponse; id: string }>()
);
