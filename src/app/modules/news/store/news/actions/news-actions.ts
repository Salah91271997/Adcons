import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { NewsResponse } from '../../../interfaces/news';

export const loadNewsPage = createAction('[newsPageComponent] load news page ');
export const newsPageLoaded = createAction(
  '[newsPageComponent] news page Loaded',
  props<{ news: NewsResponse; currentPage: number }>()
);

export const loadNewsNext = createAction(
  '[newsPageComponent] load news next',
  props<{
    pagination: number;
  }>()
);
export const newsNextLoaded = createAction(
  '[effect] news  next  Loaded',
  props<{
    news: NewsResponse;
    currentPage: number;
  }>()
);
export const newsPageFail = createAction(
  '[effect] news page  fail',
  props<{ error: HttpErrorResponse; errorMessage: string }>()
);
