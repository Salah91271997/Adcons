import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HomeGetResponse } from '../../interfaces/home';
import { HomeActions } from '../actions/home-type';
import { selectHomeFeatureSelector } from '../selectors/home-selectors';

@Injectable()
export class homeEffects {
  loadAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadHome),
      withLatestFrom(this.store.select(selectHomeFeatureSelector)),
      exhaustMap(([action, state]) => {
        return state.loaded ? of(null) : this.http.get('/api/home/');
      }),
      map((home: HomeGetResponse) => {
        return HomeActions.HomeLoaded({ home });
      })
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpService,
    private store: Store
  ) {}
}
