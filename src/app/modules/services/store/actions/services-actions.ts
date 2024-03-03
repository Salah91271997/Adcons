import { createAction, props } from '@ngrx/store';
import { Services } from '../../interfaces/services';

export const loadServices = createAction('[Services] Load All Data');
export const servicesLoaded = createAction(
  '[Services AllData Effect] ',
  props<{ services: Services }>()
);
