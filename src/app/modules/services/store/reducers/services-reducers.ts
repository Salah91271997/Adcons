import { createReducer, on } from '@ngrx/store';
import { Services } from '../../interfaces/services';
import { ServicesActions } from '../actions/services-type';

export interface servicesState {
  servicesLoaded: boolean;
  services: Services | null;
}
export const initialservicesState: servicesState = {
  servicesLoaded: false,
  services: null,
};

export const servicesReducer = createReducer(
  initialservicesState,

  on(ServicesActions.servicesLoaded, (state, action) => {
    return action.services
      ? {
          ...state,
          servicesLoaded: true,
          services: action.services,
        }
      : { ...state };
  })
);
