import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss'],
})
export class DetailsSectionComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  scrolled = false;
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  data: any;
  chartOptions: any;
  callBack: any;
  @ViewChild('circle', { static: false }) circleElement!: ElementRef;
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  basicData: any;
  basicOptions: any;
  dataStat!: number[];
  constructor(private translationService: TranslationService) {}
  isIntersecting(status: boolean, element: HTMLDivElement) {
    this.scrolled = status;
  }

  ngOnInit(): void {
    this.appLang();
    if (this.item.product_details) {
      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            rotation: -100,
            data: [
              this.item?.product_details?.progress_1,
              100 - this.item.product_details?.progress_1,
            ],
            backgroundColor: ['#FF730F', '#F2F2F2'],
            hoverBackgroundColor: ['#FF730F', '#F2F2F2'],
            label: 'A',
          },
          {
            rotation: -95,
            data: [
              this.item.product_details?.progress_2,
              100 - this.item.product_details?.progress_2,
            ],
            backgroundColor: ['#0E3166', '#F2F2F2'],
            hoverBackgroundColor: ['#0E3166', '#F2F2F2'],
            label: 'B',
          },
          {
            rotation: -90,

            label: 'C',
            data: [
              this.item.product_details?.progress_3,
              100 - this.item.product_details?.progress_3,
            ],
            backgroundColor: ['#B7B7B7', '#F2F2F2'],
            hoverBackgroundColor: ['#B7B7B7 ', '#F2F2F2'],
          },
        ],
      };
    }

    this.basicData = {
      // labels: this.item.x_axis, //x-axis
      datasets: [
        {
          label: '',
          data: this.item.product_statistics,

          fill: {
            // value: 25,
            // above: 'rgba(161,133,48,.1)',
            // below: 'rgba(161,133,48,.1)',
          },
          // backgroundColor: ['rgba(161,133,48,.1)'],
          borderColor: '#FF730F',
          tension: 0.4,
        },
      ],
    };
    this.basicOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          beginAtZero: true,
        },
      },
    };
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
  ngAfterViewInit(): void {
    this.callBack = this.getData.bind(this);
    window.addEventListener('scroll', this.callBack);
  }
  getData(event: any) {
    if (event) {
      this.data = {
        labels: ['A', 'B', 'C'],

        datasets: [
          {
            rotation: -100,

            data: [80, 20],
            backgroundColor: ['#A18531', '#F2F2F2bea'],
            hoverBackgroundColor: ['#A18531', '#fffbea'],
            label: 'A',
          },
          {
            rotation: -95,
            // weight: 0.3,
            // spacing: 70,
            data: [60, 40],
            backgroundColor: ['#000', '#fffbea'],
            hoverBackgroundColor: ['#000', '#fffbea'],
            label: 'B',
          },
          {
            rotation: -90,
            // weight: 0.2,
            // spacing: 70,
            label: 'C',
            data: [40, 60],
            backgroundColor: ['#B7B7B7', '#fffbea'],
            hoverBackgroundColor: ['#B7B7B7 ', '#fffbea'],
          },
        ],
      };
      window.removeEventListener('scroll', this.callBack);
    }
  }
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
