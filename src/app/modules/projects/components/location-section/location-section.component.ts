import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location-section',
  templateUrl: './location-section.component.html',
  styleUrls: ['./location-section.component.scss'],
})
export class LocationSectionComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  constructor(
    private translationService: TranslationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.appLang();
  }
  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
