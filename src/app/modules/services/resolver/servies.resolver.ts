import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { finalize, first, Observable, of, tap } from 'rxjs';
import { loadServices } from '../store/actions/services-actions';
import { getservicesLoaded } from '../store/selectors/services-selectors';

@Injectable({
  providedIn: 'root',
})
export class ServiesResolver implements Resolve<boolean> {
  laoding: Boolean = false;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(getservicesLoaded),
      tap((loading) => {
        if (!this.laoding && !loading) this.store.dispatch(loadServices());
      }),
      first(),
      finalize(() => {
        this.laoding = false;
      })
    );
  }
  constructor(private store: Store) {}
}
