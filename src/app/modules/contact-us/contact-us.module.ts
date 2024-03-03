import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './pages';
import { ContactUsContentComponent } from './components/contact-us-content/contact-us-content.component';
@NgModule({
  declarations: [ContactUsComponent, ContactUsContentComponent],
  imports: [
    SharedModule,
    CommonModule,
    ContactUsRoutingModule,
    // StoreModule.forFeature('contactUs', contactUsReducer),
    // EffectsModule.forFeature([contactUsEffects]),
  ],
})
export class ContactUsModule {}
