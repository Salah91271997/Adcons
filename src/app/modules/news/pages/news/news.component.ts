import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { NewsItem } from '../../interfaces/news';
import { NewsPageActions } from '../../store/news/actions/news-type';
import {
  selectNewsCurrentPage,
  selectNewsList,
  selectNewsNumberOfPages,
} from '../../store/news/selectors/news-selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsPageNumber$!: Observable<number[]>;
  currentPageNumber$!: Observable<number>;
  news$!: Observable<NewsItem[]>;
  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(NewsPageActions.loadNewsPage());
    this.news$ = this.store.select(selectNewsList);
    this.newsPageNumber$ = this.store.select(selectNewsNumberOfPages);
    this.currentPageNumber$ = this.store.select(selectNewsCurrentPage);
  }
  paginate(page: number, pages: number[]) {
    if (page < 1 || page > pages.length) return;
    this.store.dispatch(
      NewsPageActions.loadNewsNext({
        pagination: page,
      })
    );
  }

}
