import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  of,
  withLatestFrom,
} from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { NewsItem, NewsResponse } from '../../../interfaces/news';
import { NewsPageActions } from '../actions/news-type';
import { selectNewsList, selectNewsState } from '../selectors/news-selectors';

@Injectable()
export class NewsPageEffects {
  newsListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsPageActions.loadNewsPage),
      withLatestFrom(this.store.select(selectNewsList)),
      exhaustMap(([type, state]) => {
        return !state
          ? this.productServices.get<NewsResponse>('/api/news/').pipe(
              map(
                (
                  res: NewsResponse
                ): { news: NewsResponse; currentPage: number } => {
                  return {
                    currentPage: 1,
                    news: res,
                  };
                }
              ),
              catchError((error) => of({ error }))
            )
          : of(null);
      }),
      map((res: any) => {
        if (res && 'error' in res) {
          return NewsPageActions.newsPageFail({
            error: res.error,
            errorMessage: '',
          });
        }
        return NewsPageActions.newsPageLoaded(res);
      })
    )
  );

  newsNextEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsPageActions.loadNewsNext),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(selectNewsState)),
          map(
            ([payload, news]): [
              {
                pagination: number;
              },
              NewsItem[] | undefined
            ] => {
              return [payload, news[action.pagination]?.results];
            }
          )
        )
      ),
      exhaustMap(([payload, news]) => {
        let url = `/api/news/?page=${payload.pagination}`;
        return !news
          ? this.productServices.get<NewsResponse>(url).pipe(
              map(
                (
                  res: NewsResponse
                ): {
                  news: NewsResponse;
                  currentPage: number;
                } => {
                  return {
                    news: res,
                    currentPage: payload.pagination,
                  };
                }
              ),
              catchError((error) => of({ error }))
            )
          : of({ currentPage: payload.pagination });
      }),
      map((res: any) => {
        if (res && 'error' in res) {
          return NewsPageActions.newsPageFail({
            error: res.error,
            errorMessage: '',
          });
        }
        if (!res.news) {
          res = {
            news: null,
            currentPage: res.currentPage,
          };
        }
        return NewsPageActions.newsNextLoaded(res);
      })
    )
  );
  constructor(
    private actions$: Actions,
    private productServices: HttpService,
    private store: Store
  ) {}
}
