import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './pages/news/news.component';
// import { NewsComponent } from './pages';
import { NewsDetailsEffects } from './store/news-details/effects/news-details.effects';
import { NewsDetailsReducer } from './store/news-details/reducers/news-details.reducers';
import { NewsPageEffects } from './store/news/effects/news-effects';
import { newsPageReducer } from './store/news/reducers/news-reducers';
// import { NewsGridComponent } from './components';
@NgModule({
  declarations: [NewsComponent, NewsItemComponent, NewsDetailsComponent],
  imports: [
    SharedModule,
    CommonModule,
    NewsRoutingModule,
    StoreModule.forFeature('news', newsPageReducer),
    StoreModule.forFeature('NewsDetails', NewsDetailsReducer),
    EffectsModule.forFeature([NewsPageEffects, NewsDetailsEffects]),
  ],
})
export class NewsModule {}
