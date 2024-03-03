import { createReducer, on } from '@ngrx/store';
import { ProjectPage } from '../../../interfaces/projects';
import { ProjectPageContentActions } from '../actions/Project-page-type';

export const initState: ProjectPage = {
  title: '',
  description: '',
};
export const projectPageContentReducer = createReducer(
  initState,

  on(ProjectPageContentActions.productPageContent, (state, action) =>
    action
      ? {
          ...state,
          ...action.page,
        }
      : state
  )
);
