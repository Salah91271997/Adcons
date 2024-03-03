import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactUstState } from '../reducers/contact-us-reducers';

export const contactUsFeatureSelector =
  createFeatureSelector<ContactUstState>('contactUs');

export const getcontactUs = createSelector(
  contactUsFeatureSelector,
  (state) => state.contactUs
);

export const getcontactUsLoaded = createSelector(
  contactUsFeatureSelector,
  (state) => state.contactUsLoaded
);
