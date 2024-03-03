import { ActionReducerMap } from '@ngrx/store';
import {
  contactUsReducer,
  ContactUstState,
} from '../modules/contact-us/store/reducers/contact-us-reducers';

export interface AppState {
  contactUs: ContactUstState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  contactUs: contactUsReducer,
};
