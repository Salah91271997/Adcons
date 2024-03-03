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
  Pagination,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };
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
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
