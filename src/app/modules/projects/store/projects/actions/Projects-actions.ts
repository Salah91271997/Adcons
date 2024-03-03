import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Projects, ProjectsResonse } from '../../../interfaces/projects';

export const loadProductPage = createAction(
  '[productPageComponent] load project page '
);
export const productPageLoaded = createAction(
  '[productListComponent] project page  Loaded',
  props<{ projects: Projects }>()
);
export const productFilterLoad = createAction(
  '[productListComponent] project filter load',
  props<{ id: string | number; filter: 'service' | 'sector' | 'year' }>()
);
export const productFilterLoaded = createAction(
  '[productListComponent] project filter  Loaded',
  props<{ projects: Projects; id: string | number }>()
);
export const loadproductFilterNext = createAction(
  '[productListComponent] load project filter next',
  props<{
    pagination: number;
    id: string | number;
    filter: 'service' | 'sector' | 'year';
  }>()
);
export const productFilterNextLoaded = createAction(
  '[productListComponent] project filter next  Loaded',
  props<{
    projects: ProjectsResonse;
    id: string | number;
    currntPage: number;
  }>()
);
export const productpageFail = createAction(
  '[productListComponent] project page  fail',
  props<{ error: HttpErrorResponse; errorMessage: string }>()
);
