import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AboutUsState } from '../reducers/about-us-reducers';

export const aboutFeatureSelector =
  createFeatureSelector<AboutUsState>('about');

export const getAboutUsData = createSelector(
  aboutFeatureSelector,
  (state) => state.about
);

export const getAboutUsLoaded = createSelector(
  aboutFeatureSelector,
  (state) => state.AboutUsLoaded
);

// export const getLeaderShipNext = createSelector(
//   aboutFeatureSelector,
//   (state) => state.about?.leadership.next
// );
