import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { Service } from '../../../interfaces/services';
import {
  getAllServices,
  selectFilteredServices,
} from '../../../store/selectors/services-selectors';
SwiperCore.use([Navigation]);
@Component({
  selector: 'services-slider',
  templateUrl: './services-slider.component.html',
  styleUrls: ['./services-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesSliderComponent implements OnInit {
  imgUrl = environment.baseUrl;
  serviceData$: Observable<Service[] | undefined> | undefined;
  public pageSlug: string = '';
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}
  Options: SwiperOptions = {
    navigation: true,
    spaceBetween: 100,
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
      },
    },
  };
  getSlug() {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.pageSlug = res['slug'];
      },
    });
  }
  ngOnInit(): void {
    this.getSlug();
    this.serviceData$ = this.store.select(
      selectFilteredServices(this.pageSlug)
    );
  }
}
