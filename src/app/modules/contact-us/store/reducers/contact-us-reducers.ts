import { createReducer, on } from '@ngrx/store';
import { ContactUs } from '../../interfaces/contact-us';
import { ContactUsActions } from '../actions/contact-us-type';
export interface ContactUstState {
  contactUsLoaded: boolean;
  contactUs: ContactUs | null;
}
export const initialCourseState: ContactUstState = {
  contactUsLoaded: false,
  contactUs: null,
};

export const contactUsReducer = createReducer(
  initialCourseState,

  on(ContactUsActions.contactUsloaded, (state, action) => {
    return action.contactUs
      ? {
          ...state,
          contactUsLoaded: true,
          contactUs: action.contactUs,
        }
      : { ...state };
  })
);
