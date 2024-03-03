import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Services } from '../../interfaces/services';
import { ServicesActions } from '../actions/services-type';

@Injectable()
export class servicesEffects {
  loadAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServicesActions.loadServices),

      exhaustMap(() => {
        return this.http.get('/api/service/');
      }),
      map((services: Services) => {
        return ServicesActions.servicesLoaded({ services });
      })
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpService,
    private store: Store
  ) {}
}
