import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import {
  ExploreComponent,
  OurProjectComponent,
  OverviewComponent,
  ProjectComponent,
  ServiceItemComponent,
  ServicesGridComponent,
  ServicesSliderComponent,
} from './components';
import { ServicesComponent, ServicesDetailsComponent } from './pages';
import { ServicesRoutingModule } from './services-routing.module';
import { servicesEffects } from './store/effects/services-effects';
import { servicesReducer } from './store/reducers/services-reducers';
import { servicesDetailsEffects } from './store/services-details-store/store/effects/service-details-effects';
import { ServiceDetailsReducer } from './store/services-details-store/store/reducers/service-details-reducers';

@NgModule({
  declarations: [
    ServicesComponent,
    ServicesGridComponent,
    OurProjectComponent,
    ServicesDetailsComponent,
    OverviewComponent,
    ProjectComponent,
    ExploreComponent,
    ServicesSliderComponent,
    ServiceItemComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    SwiperModule,
    ServicesRoutingModule,
    StoreModule.forFeature('services', servicesReducer),
    StoreModule.forFeature('ServiceDetails', ServiceDetailsReducer),
    EffectsModule.forFeature([servicesEffects]),
    EffectsModule.forFeature([servicesDetailsEffects]),
  ],
})
export class ServicesModule {}
