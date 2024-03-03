import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AdconsSectionComponent } from './components/adcons-section/adcons-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { GrowthSectionComponent } from './components/growth-section/growth-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { homeEffects } from './store/effects/home-effects';
import { homeReducer } from './store/reducers/home-reducers';
import { ValueSectionComponent } from './components/value-section/value-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    FAQComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AdconsSectionComponent,
    GrowthSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    ValueSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([homeEffects]),
  ],
})
export class HomeModule {}
