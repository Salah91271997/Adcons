import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import {
  ProjectsDetailsGetResponse,
  ProjectsDetailsResponse,
} from '../../../interfaces/projects-details';
import { ProjectDetailsActions } from '../action/projects-details-type';

export interface ProjectsDetailsState {
  ProjectsDetails: ProjectsDetailsResponse;
}
export const initState: ProjectsDetailsState = {
  ProjectsDetails: {},
};

export const ProjectsDetailsReducer = createReducer(
  initState,
  on(ProjectDetailsActions.ProjectsDetailLoaded, (state, action) => {
    const newDictionrey: { [key: string]: ProjectsDetailsGetResponse } =
      cloneDeep(state.ProjectsDetails);
    newDictionrey[action.id] = { ...action.ProjectsDetails, loaded: true };
    return action.ProjectsDetails
      ? {
          ...state,
          ProjectsDetails: newDictionrey,
        }
      : { ...state };
  })
);
