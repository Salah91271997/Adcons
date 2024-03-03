import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { finalize, first, Observable, of, tap } from 'rxjs';
import { loadContactUs } from '../store/actions/contact-us-actions';
import { getcontactUsLoaded } from '../store/selectors/contact-us-selectors';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverResolver implements Resolve<boolean> {
  laoding: Boolean = false;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(getcontactUsLoaded),
      tap((loading) => {
        if (!this.laoding && !loading) this.store.dispatch(loadContactUs());
      }),
      first(),
      finalize(() => {
        this.laoding = false;
      })
    );
  }
  constructor(private store: Store) {}
}
