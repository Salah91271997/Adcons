import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsComponent } from './pages/news/news.component';
// import { NewsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    data: { title: 'NEWS' },
  },
  {
    path: 'details/:id',
    component: NewsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
