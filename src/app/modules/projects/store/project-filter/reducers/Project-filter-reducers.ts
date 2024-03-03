import { createReducer, on } from '@ngrx/store';
import { ProductFilters } from '../../../interfaces/projects';
import { ProjectPageFilterActions } from '../actions/Project-filter-type';

export const initState: ProductFilters = {
  services: [],
  sectors: [],
  years: [],
};
export const projectPageFilterReducer = createReducer(
  initState,

  on(ProjectPageFilterActions.productPageFilter, (state, action) =>
    action
      ? {
          ...state,
          ...action.filters,
        }
      : state
  )
);
