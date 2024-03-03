import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
import { Projects } from '../../../interfaces/projects';

export const selectProjectState = createFeatureSelector<Projects>('projects');
export const selectProjectList = memoize((key: string | number) =>
  createSelector(selectProjectState, (projectListState) => {
    return projectListState[key]?.[projectListState[key].currentPage].results;
  })
);

export const selectProjectNumberOfPages = memoize((key: string | number) =>
  createSelector(selectProjectState, (projectListState) => {
    let pages: number[] = [];
    let count: number =
      projectListState[key]?.[projectListState[key]?.currentPage].count;
    if (count) {
      let countDown: number = Math.ceil(count / 10);
      for (let i = 0; i < countDown; i++) {
        pages.push(i + 1);
      }
    }
    return pages;
  })
);
export const selectProjectCurrentPage = memoize((key: string | number) =>
  createSelector(selectProjectState, (projectListState) => {
    return projectListState[key]?.currentPage;
  })
);
