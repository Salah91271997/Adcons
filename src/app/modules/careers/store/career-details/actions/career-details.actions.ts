import { createAction, props } from '@ngrx/store';
import { CareerDetails } from '../../../interfaces/careers';

export const loadCarrerDetails = createAction(
  '[Carrer Details Component] load Carrer details',
  props<{ id: string }>()
);

export const carrerDetailsLoaded = createAction(
  '[Carrer Details Effect ] Carrer details loaded',
  props<{ id: string; carrerDetails: CareerDetails }>()
);
