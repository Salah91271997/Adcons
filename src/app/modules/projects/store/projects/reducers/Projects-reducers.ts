import { createReducer, on } from '@ngrx/store';
import { Projects } from '../../../interfaces/projects';
import { ProjectPageActions } from '../actions/Projects-type';

export const initState: Projects = {};
export const projectPageReducer = createReducer(
  initState,

  on(ProjectPageActions.productPageLoaded, (state, action) =>
    action
      ? {
          ...state,
          ...action.projects,
        }
      : state
  ),
  on(ProjectPageActions.productFilterLoaded, (state, action) =>
    !state[action.id]
      ? {
          ...state,
          ...action.projects,
        }
      : state
  ),
  on(ProjectPageActions.productFilterNextLoaded, (state, action) => {
    if (action.projects) {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.currntPage]: action.projects,
          currentPage: action.currntPage,
        },
      };
    } else {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          currentPage: action.currntPage,
        },
      };
    }

    // // ? {
    // //     ...state,
    // //     [action.id]: {
    // //       ...state[action.id],
    // //       [action.currntPage]:
    // //         action.projects?.[action.id][action.currntPage],
    // //       currentPage: action.currntPage,
    // //     },
    // //   }
    // : {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       currentPage: action.currntPage,
    //     },
    //   };
  })
);
