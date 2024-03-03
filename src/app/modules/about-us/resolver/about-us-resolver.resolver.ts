import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { finalize, first, Observable, of, tap } from 'rxjs';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { getAboutUsLoaded } from '../store/selectors/about-us-selectors';
import { loadAboutUS } from '../store/actions/about-us-actions';

@Injectable({
  providedIn: 'root',
})
export class AboutUsResolverResolver implements Resolve<boolean> {
  laoding: Boolean = false;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(getAboutUsLoaded),
      tap((loading) => {
        if (!this.laoding && !loading) this.store.dispatch(loadAboutUS());
      }),
      first(),
      finalize(() => {
        this.laoding = false;
      })
    );
  }
  constructor(private store: Store) {}
}
