import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
import { NewsDetailsState } from '../reducers/news-details.reducers';

export const selectNewsDetailsState =
  createFeatureSelector<NewsDetailsState>('NewsDetails');
export const selectNewsDetailsContent = memoize((id: string) =>
  createSelector(selectNewsDetailsState, (state) => state?.newsDetails[id])
);
export const selectNewsDetailsLoaded = memoize((id: string) =>
  createSelector(
    selectNewsDetailsState,
    (state) => state?.newsDetails[id]?.loaded
  )
);
export const selectNewsDetailsContentDescription = memoize((id: string) =>
  createSelector(selectNewsDetailsState, (state) =>
    state?.newsDetails[id]?.description?.map((item: any) => {
      return item.list_items.split(/\r?\n/);
    })
  )
);
