import { createReducer, on } from '@ngrx/store';
import { HomeGetResponse } from '../../interfaces/home';
import { HomeActions } from '../actions/home-type';

export interface HomeState {
  loaded: boolean;
  home: HomeGetResponse | null;
}
export const initialCourseState: HomeState = {
  loaded: false,
  home: null,
};

export const homeReducer = createReducer(
  initialCourseState,
  on(HomeActions.HomeLoaded, (state, action) => {
    return action.home
      ? {
          ...state,
          loaded: true,
          home: action.home,
        }
      : { ...state };
  })
);
