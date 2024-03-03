import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { HomeGetResponse } from '../../interfaces/home';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeSectionComponent implements OnInit {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: HomeGetResponse;
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

  // Change App Lang
  changeLang() {
    this.translationService.changeLang();
  }
}
