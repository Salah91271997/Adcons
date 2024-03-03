import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages';
import { AboutUsComponentHero } from './components';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MissionComponent } from './components/mission/mission.component';
import { HistoryComponent } from './components/history/history.component';
import { LatestProjectComponent } from './components/latest-project/latest-project.component';
import { LocationComponent } from './components/location/location.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { SwiperModule } from 'swiper/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { aboutUsReducer } from './store/reducers/about-us-reducers';
import { contactEffects } from './store/effects/about-us-effects';
import { ActiveDirective } from './directive/active.directive';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUsComponentHero,
    ContactUsComponent,
    MissionComponent,
    HistoryComponent,
    LatestProjectComponent,
    LocationComponent,
    LeadershipComponent,
    ActiveDirective,
    QuoteComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    SwiperModule,
    StoreModule.forFeature('about', aboutUsReducer),
    EffectsModule.forFeature([contactEffects]),
  ],
})
export class AboutUsModule {}
