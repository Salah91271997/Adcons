import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from 'src/assets/config/config';
import { Lang } from '../../enums/language';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLang = '';
  private renderer: Renderer2;
  private isArabic = new BehaviorSubject<boolean>(false);
  isArabic$ = this.isArabic.asObservable();

  constructor(
    private translate: TranslateService,
    private rendererFactory: RendererFactory2,
    private localStorage: LocalStorageService
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.init();
  }
  init(): void {
    const currentLang = this.localStorage.getLocal('userLang');
    if (!currentLang) {
      this.currentLang = AppConfig.lang;
      this.localStorage.setLocal('userLang', this.currentLang);
    } else {
      this.currentLang = this.localStorage.getLocal('userLang');
    }
    this.adjustApp();
  }

  changeLang(): void {
    window.location.reload();
    this.currentLang =
      this.currentLang === Lang.Arabic ? Lang.English : Lang.Arabic;
    this.localStorage.setLocal('userLang', this.currentLang);
    this.adjustApp();
  }

  adjustApp(): void {
    this.translate.use(this.currentLang);
    if (this.currentLang === Lang.Arabic) {
      this.renderer.addClass(document.body, 'rtl');
      this.isArabic.next(true);
    } else {
      this.renderer.removeClass(document.body, 'rtl');
      this.isArabic.next(false);
    }
  }
}
