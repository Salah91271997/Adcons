import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { NewsDetailsGetResponse } from '../../interfaces/news-details';
import { NewsDetailsActions } from '../../store/news-details/action/news-details-type';
import {
  selectNewsDetailsContent,
  selectNewsDetailsContentDescription,
} from '../../store/news-details/selectors/news-details.selectors';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  newsDetails$!: Observable<NewsDetailsGetResponse | null>;
  id!: string;
  listArr!: Observable<string[] | undefined>;
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getPageSlug();
  }

  getPageSlug() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.store.dispatch(
        NewsDetailsActions.loadNewsDetail({ id: params['id'] })
      );
      this.newsDetails$ = this.store.select(selectNewsDetailsContent(this.id));
      // });
      this.listArr = this.store.select(
        selectNewsDetailsContentDescription(this.id)
      );
    });
  }
}
