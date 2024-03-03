import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CareersRoutingModule } from './careers-routing.module';
import { CareerDetailsComponent, CareersComponent } from './pages';
import {
  CareersGridComponent,
  DetailsHeaderComponent,
  FormComponent,
  JobDescriptionComponent,
  LocationComponent,
  ResposibilitiesComponent,
} from './components';

import { StoreModule } from '@ngrx/store';
import { careersReducer } from './store/careers/reducers/careers-reducers';
import { EffectsModule } from '@ngrx/effects';
import { CareersEffectes } from './store/careers/effects/careers-effects';
import { carrerDetailsReducer } from './store/career-details/reducers/career-details.reducers';
import { CareerDetailsEffects } from './store/career-details/effects/career-details-effects';

@NgModule({
  declarations: [
    CareersComponent,
    CareersGridComponent,
    CareerDetailsComponent,
    DetailsHeaderComponent,
    JobDescriptionComponent,
    ResposibilitiesComponent,
    LocationComponent,
    FormComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CareersRoutingModule,
    StoreModule.forFeature('Careers', careersReducer),
    StoreModule.forFeature('CareerDetails', carrerDetailsReducer),
    EffectsModule.forFeature([CareersEffectes]),
    EffectsModule.forFeature([CareerDetailsEffects]),
  ],
})
export class CareersModule {}
