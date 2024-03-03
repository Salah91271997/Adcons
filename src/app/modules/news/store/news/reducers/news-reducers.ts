import { createReducer, on } from '@ngrx/store';
import { News } from '../../../interfaces/news';
import { NewsPageActions } from '../actions/news-type';

export const initState: News = {
  currentPage: 1,
};
export const newsPageReducer = createReducer(
  initState,
  on(NewsPageActions.newsPageLoaded, (state, action) =>
    action.news
      ? {
          ...state,
          [action.currentPage]: action.news,
          currentPage: action.currentPage,
        }
      : state
  ),

  on(NewsPageActions.newsNextLoaded, (state, action) => {
    if (action.news) {
      return {
        ...state,
        [action.currentPage]: action.news,
        currentPage: action.currentPage,
      };
    } else {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
  })
);
