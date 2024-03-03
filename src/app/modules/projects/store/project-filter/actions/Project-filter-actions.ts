import { createAction, props } from '@ngrx/store';
import { ProductFilters } from '../../../interfaces/projects';

export const productPageFilter = createAction(
  '[productListComponent] project page  Filter',
  props<{ filters: ProductFilters }>()
);
