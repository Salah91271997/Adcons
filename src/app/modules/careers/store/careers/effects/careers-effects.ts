import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, of, withLatestFrom } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { CareersActions } from '../actions/careers-type';
import { selectCareersState } from '../selectors/careers-selectors';

@Injectable()
export class CareersEffectes {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private store: Store
  ) {}
  careersEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CareersActions.loadCareers),
      withLatestFrom(this.store.select(selectCareersState)),
      concatMap(([action, state]) => {
        return state.loaded
          ? of(null)
          : this.httpService.get('/api/career/').pipe(catchError((err) => err));
      }),
      map((res) => CareersActions.careersLoaded({ careers: res }))
    )
  );
  careersListNextEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CareersActions.loadCarrersListNext),
      withLatestFrom(this.store.select(selectCareersState)),
      concatMap(([action, state]) => {
        return state.careers?.careers.next
          ? this.httpService
              .getNext(state.careers.careers.next)
              .pipe(catchError((err) => err))
          : of(null);
      }),

      map((res) => CareersActions.carrersListNextLoaded({ careers: res }))
    )
  );
}
