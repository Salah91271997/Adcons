import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CareerDetails } from '../../../interfaces/careers';
import { CarrerDetailsActions } from '../actions/career-details-type';
import { selectCareersDetailsLoader } from '../selectors/career-details.selectors';
@Injectable()
export class CareerDetailsEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private store: Store
  ) {}

  careersDetailsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarrerDetailsActions.loadCarrerDetails),
      concatMap((action) =>
        of(action.id).pipe(
          withLatestFrom(
            this.store.select(selectCareersDetailsLoader(action.id))
          ),
          map(([id, loaded]): [string, boolean] => [id, loaded])
        )
      ),
      exhaustMap(([id, loaded]) =>
        loaded
          ? of([id, null])
          : this.httpService.get('/api/career/' + id).pipe(
              map((res): [string, CareerDetails] => [id, res]),
              catchError((error) => of({ error }))
            )
      ),
      map(([id, carrerDetails]: any) => {
        return CarrerDetailsActions.carrerDetailsLoaded({ id, carrerDetails });
      })
    )
  );
}
