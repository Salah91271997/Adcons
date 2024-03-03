import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ContactUs } from '../../interfaces/contact-us';
import { ContactUsActions } from '../actions/contact-us-type';

@Injectable()
export class contactUsEffects {
  loadAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactUsActions.loadContactUs),
      exhaustMap(() => {
        return this.http.get('/api/contact-us');
      }),
      map((contactUs: ContactUs) => {
        return ContactUsActions.contactUsloaded({ contactUs });
      })
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpService,
    private store: Store
  ) {}
}
