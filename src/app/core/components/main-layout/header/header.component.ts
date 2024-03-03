import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { TranslationService } from 'src/app/core/services/translation/translation.service';

@Component({
  selector: 'adcons-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isArabic: boolean = false;
  projectsAndServicesList$!: Observable<any>;
  curentSelect: 'services' | 'sectors' | 'years' = 'sectors';
  public pageSlug: string = '';
  private langUnsubscribe!: Subscription;

  constructor(
    private translationService: TranslationService,
    private httpService: HttpService
  ) {}
  ngOnInit(): void {
    this.appLang();
    this.getLastFiveProjectsAndServices();
  }
  // Get App Lang
  appLang() {
    this.langUnsubscribe = this.translationService.isArabic$.subscribe(
      (val) => {
        this.isArabic = val;
      }
    );
  }

  // Change App Lang
  changeLang() {
    this.translationService.changeLang();
  }

  getLastFiveProjectsAndServices() {
    this.projectsAndServicesList$ = this.httpService.get(
      `/api/service/product/top/`
    );
  }

  // Unsubscribe All Observiable
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
