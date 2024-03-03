import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ServiceDetails } from '../../../../interfaces/services';
import { ServiceDetailsActions } from '../actions/service-details-types';
import {
  selectServiceDetailsLoader,
  selectServiceDetailsState,
} from '../selectors/service-details-selectors';

@Injectable()
export class servicesDetailsEffects {
  loadAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceDetailsActions.loadServiceDetails),
      concatMap((action) =>
        of(action.id).pipe(
          withLatestFrom(
            this.store.select(selectServiceDetailsLoader(action.id))
          ),
          map(([id, loaded]): [string, boolean] => [id, loaded])
        )
      ),
      exhaustMap(([id, loaded]) =>
        loaded
          ? of([id, null])
          : this.http.get('/api/service/' + id).pipe(
              map((res): [string, ServiceDetails] => [id, res]),
              catchError((error) => of({ error }))
            )
      ),
      map(([id, servicsDetails]: [string: ServiceDetails] | any) =>
        ServiceDetailsActions.ServiceDetailsLoded({ id, servicsDetails })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpService,
    private store: Store
  ) {}
}
