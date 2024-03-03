import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { NewsItem } from '../../interfaces/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  isArabic: boolean = false;
  @Input('item') item!: NewsItem;
  imgUrl = environment.baseUrl;

  constructor() {}

  ngOnInit(): void {}
}
