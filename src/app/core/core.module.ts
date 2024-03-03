import { CommonModule } from '@angular/common';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { contactUsEffects } from '../modules/contact-us/store/effects/contact-us-effects';
import { SharedModule } from '../shared/shared.module';
import { reducers } from '../store/state';
import { LoaderComponent } from './components/loader/loader.component';
import {
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
} from './components/main-layout';
import { LanguageInterceptor } from './services/interceptors/language/language.interceptor';

@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([contactUsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true,
    },
  ],
  exports: [LoaderComponent],
})
export class CoreModule {}
export function HttpLoaderFactory(http: HttpClient): object {
  return new TranslateHttpLoader(http, 'assets/translation-files/', '.json');
}
