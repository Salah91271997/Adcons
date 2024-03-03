import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, mergeMap, Subscription } from 'rxjs';
import { AppConfig } from 'src/assets/config/config';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { TranslationService } from './core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly currentLang: string;
  private _subscription = new Subscription();
  private previousUrl!: string;
  private currentUrl!: string;
  private pageTitle = 'MENU.';

  constructor(
    private localStorage: LocalStorageService,
    private translationService: TranslationService,
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.currentLang = this.localStorage.getLocal('userLang')
      ? this.localStorage.getLocal('userLang')
      : AppConfig.lang;
    translate.setDefaultLang(this.currentLang);
    this.getPageTitle();
  }
  ngOnInit(): void {
    // this.store.dispatch(ProjectPageActions.loadProductPage());
    this._subscription.add(
      this.translationService.isArabic$.subscribe(() => {
        this.setPageTitle();
      })
    );
    this.setPreviousUrl();
  }

  /* Get Page Title */
  getPageTitle(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          let child = route;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
              route = child;
            } else {
              child = null;
            }
          }
          return route;
        }),
        mergeMap((route) => route!.data)
      )
      .subscribe((data) => {
        this.pageTitle = `MENU.${data['title']}`;
        this.setPageTitle();
      });
  }

  /* Set Page Title */
  setPageTitle(): void {
    this.translate
      .get(['MENU.ADCONS', this.pageTitle])
      .subscribe((translateValue) => {
        this.titleService.setTitle(
          translateValue['MENU.ADCONS'] + ' | ' + translateValue[this.pageTitle]
        );
      });
  }

  /* Set Previous Url */
  setPreviousUrl(): void {
    this.currentUrl = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (['/error/404', '/error/500'].indexOf(this.router.url) === -1) {
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.url;
          this.localStorage.setLocal('previousUrl', this.previousUrl);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
