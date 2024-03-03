import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Thumbs,
  Pagination,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  Thumbs,
]);

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageSectionComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  constructor(private translationService: TranslationService) {}
  thumbsSwiper: any;
  options: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 6,
    direction: 'horizontal',
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        direction: 'vertical',
      },
    },
  };

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
