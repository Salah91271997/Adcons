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
import { AboutUs, Leadership } from '../../interfaces/about-us';
import { AboutUsActions } from '../actions/about-us-type';
import { aboutFeatureSelector } from '../selectors/about-us-selectors';

@Injectable()
export class contactEffects {
  loadAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AboutUsActions.loadAboutUS),
      exhaustMap(() => {
        return this.http.get('/api/about-us/');
      }),
      map((about: AboutUs) => {
        return AboutUsActions.AboutUsLoaded({ about });
      })
    )
  );

  // loadNextLeaderShip$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AboutUsActions.loadLeaderShipNex),
  //     withLatestFrom(this.store.select(getLeaderShipNext)),

  //     exhaustMap(([action, state]) =>
  //       state ? this.http.getNext(state) : of(null)
  //     ),

  //     map((nextLeaderShip: Leadership) => {
  //       return AboutUsActions.LeaderShipLoaded({ nextLeaderShip });
  //     })
  //   )
  // );
  constructor(
    private actions$: Actions,
    private http: HttpService,
    private store: Store
  ) {}
}
