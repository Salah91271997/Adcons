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
import { NewsDetailsGetResponse } from '../../../interfaces/news-details';
import { NewsDetailsActions } from '../action/news-details-type';
import { selectNewsDetailsLoaded } from '../selectors/news-details.selectors';

@Injectable()
export class NewsDetailsEffects {
  newsDetailsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsDetailsActions.loadNewsDetail),
      concatMap((action) =>
        of(action.id).pipe(
          withLatestFrom(this.store.select(selectNewsDetailsLoaded(action.id))),
          map(([id, loaded]): [string, boolean] => [id, loaded])
        )
      ),
      exhaustMap(([id, loaded]) =>
        loaded
          ? of([id, null])
          : this.newsServices.get(`/api/news/${id}/`).pipe(
              map((res): [string, NewsDetailsGetResponse] => [id, res]),
              catchError((error) => of({ error }))
            )
      ),
      map(([id, newsDetails]: any) => {
        return NewsDetailsActions.newsDetailLoaded({
          id,
          NewsDetails: newsDetails,
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private newsServices: HttpService,
    private store: Store
  ) {}
}
