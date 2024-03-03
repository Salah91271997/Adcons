import { createAction, props } from '@ngrx/store';
import { AboutUs, Leadership } from '../../interfaces/about-us';

export const loadAboutUS = createAction('[AboutUs] Load All Data');
export const AboutUsLoaded = createAction(
  '[AboutUs Effect] All Data Loaded',
  props<{ about: AboutUs }>()
);
// export const loadLeaderShipNex = createAction(
//   '[AboutUs Effect] load LeaderShip next'
// );
// export const LeaderShipLoaded = createAction(
//   '[AboutUs Effect] LeaderShip next loaded',
//   props<{ nextLeaderShip: Leadership }>()
// );
