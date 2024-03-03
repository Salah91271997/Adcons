import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import {
  NewsDetailsGetResponse,
  NewsDetailsResponse,
} from '../../../interfaces/news-details';
import { NewsDetailsActions } from '../action/news-details-type';
export interface NewsDetailsState {
  newsDetails: NewsDetailsResponse;
}
export const initState: NewsDetailsState = {
  newsDetails: {},
};

export const NewsDetailsReducer = createReducer(
  initState,
  on(NewsDetailsActions.newsDetailLoaded, (state, action) => {
    const newDictionrey: { [key: string]: NewsDetailsGetResponse } = cloneDeep(
      state.newsDetails
    );
    newDictionrey[action.id] = { ...action.NewsDetails, loaded: true };
    return action.NewsDetails
      ? {
          ...state,
          newsDetails: newDictionrey,
        }
      : { ...state };
  })
);
