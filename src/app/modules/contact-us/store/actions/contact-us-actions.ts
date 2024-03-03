import { createAction, props } from '@ngrx/store';
import { ContactUs } from '../../interfaces/contact-us';

export const loadContactUs = createAction('[Contact-us] Load All Data');
export const contactUsloaded = createAction(
  '[Contact Effect] All Data Loaded',
  props<{ contactUs: ContactUs }>()
);
