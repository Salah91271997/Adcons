import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AboutUs } from '../../interfaces/about-us';
import { AboutUsActions } from '../actions/about-us-type';

export interface AboutUsState {
  AboutUsLoaded: boolean;
  about: AboutUs | any;
}
export const initialAboutUsState: AboutUsState = {
  AboutUsLoaded: false,
  about: null,
};

export const aboutUsReducer = createReducer(
  initialAboutUsState,

  on(AboutUsActions.AboutUsLoaded, (state, action) => {
    return action.about
      ? {
          ...state,
          AboutUsLoaded: true,
          about: action.about,
        }
      : { ...state };
  })
);
