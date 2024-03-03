import { createFeatureSelector, createSelector } from '@ngrx/store';
import { News } from '../../../interfaces/news';

export const selectNewsState = createFeatureSelector<News>('news');
export const selectNewsList = createSelector(
  selectNewsState,
  (NewsListState) => {
    return NewsListState[NewsListState.currentPage]?.results;
  }
);
// export const selectNewsListNext = createSelector(
//   selectNewsState,
//   (NewsListState) => {
//     return NewsListState[NewsListState.currentPage]?.next;
//   }
// );

export const selectNewsNumberOfPages = createSelector(
  selectNewsState,
  (NewsListState) => {
    let pages: number[] = [];
    let count: number = NewsListState[NewsListState.currentPage]?.count;
    if (count) {
      let countDown: number = Math.ceil(count / 10);
      for (let i = 0; i < countDown; i++) {
        pages.push(i + 1);
      }
    }
    return pages;
  }
);
export const selectNewsCurrentPage = createSelector(
  selectNewsState,
  (NewsListState) => {
    return NewsListState.currentPage;
  }
);
