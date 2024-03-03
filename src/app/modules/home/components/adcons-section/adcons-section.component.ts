import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import { Home } from '../../interfaces/home';

@Component({
  selector: 'app-adcons-section',
  templateUrl: './adcons-section.component.html',
  styleUrls: ['./adcons-section.component.scss'],
})
export class AdconsSectionComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: Home;
  imgUrl = environment.baseUrl;
  constructor(private translationService: TranslationService) {}

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

  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
