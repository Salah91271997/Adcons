import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { ServiceDetails } from '../../../../interfaces/services';
import { ServiceDetailsActions } from '../actions/service-details-types';

export interface ServiceDetailsState {
  ServiceDetails: { [key: string]: ServiceDetails };
}

export const initialState: ServiceDetailsState = {
  ServiceDetails: {},
};

export const ServiceDetailsReducer = createReducer(
  initialState,

  on(ServiceDetailsActions.ServiceDetailsLoded, (state, action) => {
    const newService: { [key: string]: ServiceDetails } = cloneDeep(
      state.ServiceDetails
    );
    newService[action.id] = { ...action.servicsDetails, loaded: true };
    return action.servicsDetails
      ? { ...state, ServiceDetails: newService }
      : { ...state };
  })
);
