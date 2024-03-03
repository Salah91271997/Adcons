import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import { Aboutus, Social } from '../../interfaces/about-us';

@Component({
  selector: 'about-us-hero',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponentHero implements OnInit {
  @Input() aboutUs: Aboutus | undefined;
  @Input() social: Social | undefined;
  imgUrl = environment.baseUrl;
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.appLang();
  }
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
}
