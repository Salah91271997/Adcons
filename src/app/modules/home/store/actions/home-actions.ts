import { createAction, props } from '@ngrx/store';
import { HomeGetResponse } from '../../interfaces/home';

export const loadHome = createAction('[Home] Load Home');
export const HomeLoaded = createAction(
  '[Load Home Effect] Home Loaded',
  props<{ home: HomeGetResponse }>()
);
