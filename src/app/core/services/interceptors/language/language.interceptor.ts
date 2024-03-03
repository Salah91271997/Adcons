import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppConfig } from 'src/assets/config/config';
import { LocalStorageService } from '../../local-storage/local-storage.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorageService,

    private route: Router,
    private store: Store
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let language = this.localStorage.getLocal('userLang')
      ? this.localStorage.getLocal('userLang')
      : AppConfig.lang;
    if (!language) {
      language = 'en';
    }
    const token = request.clone({
      headers: new HttpHeaders({
        'Accept-Language': language,
      }),
    });
    return next.handle(token);
  }
}
