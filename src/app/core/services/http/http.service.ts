import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private loaderService: LoaderService
  ) {}

  get<T = any>(url: string, params = {}, showLoader = true): Observable<T> {
    if (showLoader) {
      this.loaderService.startLoader();
    }

    return this.http.get<T>(this.baseUrl + url, { params }).pipe(
      map((response: T) => {
        if (showLoader) {
          this.loaderService.stopLoader();
        }
        return response;
      }),
      catchError((error) => {
        this.handleHttpError(error, showLoader);
        return throwError(error);
      })
    );
  }

  getNext<Type = any>(url: string, showLoader = true): Observable<Type> {
    if (showLoader) {
      this.loaderService.startLoader();
    }
    return this.http.get<Type>(url).pipe(
      map((response: any) => {
        if (showLoader) {
          this.loaderService.stopLoader();
        }
        return response;
      }),
      catchError((error) => {
        this.handleHttpError(error, showLoader);
        return throwError(error);
      })
    );
  }

  post(url: string, body = {}, showLoader = true): Observable<any> {
    return this.http.post<any>(this.baseUrl + url, body);
  }

  // Handle Http Errores
  handleHttpError(error: any, showLoader: boolean): void {
    if (showLoader) {
      this.loaderService.stopLoader();
    }
    if (!error.ok) {
      if (error.status === 404) {
        this.router.navigate(['/errors/404']);
      } else if (error.status === 500) {
        this.router.navigate(['/errors/500']);
      } else {
      }
    }
  }
}
