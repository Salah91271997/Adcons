import { createAction, props } from '@ngrx/store';
import { ServiceDetails } from '../../../../interfaces/services';

export const loadServiceDetails = createAction(
  '[Service Detail Component] Load Service Details',
  props<{ id: string }>()
);

export const ServiceDetailsLoded = createAction(
  '[Service Detail Effect] Service Details Loaded',
  props<{ id: string; servicsDetails: ServiceDetails }>()
);
