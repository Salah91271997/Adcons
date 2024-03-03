import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { NewsDetailsGetResponse } from '../../../interfaces/news-details';

export const loadNewsDetail = createAction(
  '[NewsDetail Component] load News detail ',
  props<{ id: string }>()
);
export const newsDetailLoaded = createAction(
  '[NewsDetail Effect] News Detail  Loaded',
  props<{ NewsDetails: NewsDetailsGetResponse; id: string }>()
);
export const NewsDetailFail = createAction(
  '[NewsDetail Effect] News Detail  fail',
  props<{ error: HttpErrorResponse; errorMessage: string }>()
);
