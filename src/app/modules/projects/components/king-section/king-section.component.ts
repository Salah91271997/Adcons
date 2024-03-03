import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-king-section',
  templateUrl: './king-section.component.html',
  styleUrls: ['./king-section.component.scss'],
})
export class KingSectionComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  image!: string;

  constructor(
    private translationService: TranslationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.appLang();
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
