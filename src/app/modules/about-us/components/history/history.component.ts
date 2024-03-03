import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

import SwiperCore, {
  Pagination,
  Navigation,
  EffectFade,
  SwiperOptions,
  Swiper,
} from 'swiper';
import { EventsParams, SwiperComponent } from 'swiper/angular';
import { History } from '../../interfaces/about-us';
SwiperCore.use([Pagination, Navigation, EffectFade]);
@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {
  numbers: number[];
  imgNumbers: number[];
  constructor() {
    this.numbers = Array(150)
      .fill(0)
      .map((x, i) => i);
    this.imgNumbers = Array(9)
      .fill(0)
      .map((x, i) => i);
  }
  @Input() history: History[] | undefined;
  @Input() title: string | undefined;
  imgUrl = environment.baseUrl;
  options: SwiperOptions = {
    pagination: { clickable: true },
    navigation: true,
    speed: 1200,
    effect: 'fade',
    fadeEffect: { crossFade: true },
  };
  addActiveNext(params: EventsParams['slideNextTransitionStart']) {
    const swiper: Swiper = params[0];
    const allSlides: NodeListOf<Element> =
      swiper.el.querySelectorAll('.swiper-slide');

    allSlides.forEach((slide) => {
      slide.classList.remove('fadeleft');
    });
    const currentSlide: HTMLElement | null = swiper.el.querySelector(
      '.swiper-slide-active'
    );

    currentSlide?.classList.add('fadeleft');
  }
  addActiveprev(params: EventsParams['slidePrevTransitionStart']) {
    const swiper: Swiper = params[0];
    const allSlides: NodeListOf<Element> =
      swiper.el.querySelectorAll('.swiper-slide');

    allSlides.forEach((slide) => {
      slide.classList.remove('faderight');
    });
    const currentSlide: HTMLElement | null = swiper.el.querySelector(
      '.swiper-slide-active'
    );
    currentSlide?.classList.add('faderight');
  }

  ngOnInit(): void {}
}
