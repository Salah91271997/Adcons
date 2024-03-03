import { createAction, props } from '@ngrx/store';
import { Careers, CareersList } from '../../../interfaces/careers';

export const loadCareers = createAction('[Careers Component] careers action');

export const careersLoaded = createAction(
  '[CareersEffect] careers action success',
  props<{ careers: Careers }>()
);

export const loadCarrersListNext = createAction(
  '[Carrers effect ] load Carrers list next '
);

export const carrersListNextLoaded = createAction(
  '[Carrers effect ] loaded Carrers list next ',
  props<{ careers: CareersList }>()
);
