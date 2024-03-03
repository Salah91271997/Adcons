import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactUsFormComponent } from '../modules/contact-us/components';
import { FormSpinnerComponent } from './components/form-spinner/form-spinner.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { ActiveDirective } from './directives/active.directive';
import { RtlDirective } from './directives/rtl/rtl.directive';
import { CareerItemPipe } from './pipes/career-item/career-item.pipe';
import { CareersHeaderComponent } from '../modules/careers/components/careers-header/careers-header.component';
import { ServicesPipe } from './pipes/services/services.pipe';
import { SubTextPipe } from './pipes/desc/desc.pipe';
import { PatternComponent } from './components/pattern/pattern.component';
import { LetsBuildComponent } from '../modules/services/components';
import { HoverDirective } from './directives/hover.directive';
import { IntersectionDirective } from './directives/intersection.directive';

@NgModule({
  declarations: [
    InputTextComponent,
    NavigateComponent,
    HeaderSectionComponent,
    FormSpinnerComponent,
    RtlDirective,
    SubTextPipe,
    ActiveDirective,
    CareerItemPipe,
    ServicesPipe,
    CareersHeaderComponent,
    ContactUsFormComponent,
    PatternComponent,
    LetsBuildComponent,
    HoverDirective,
    IntersectionDirective,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    InputTextComponent,
    NavigateComponent,
    HeaderSectionComponent,
    FormSpinnerComponent,
    RtlDirective,
    SubTextPipe,
    CareerItemPipe,
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ContactUsFormComponent,
    CareersHeaderComponent,
    ServicesPipe,
    PatternComponent,
    LetsBuildComponent,
    HoverDirective,
    IntersectionDirective,
  ],
})
export class SharedModule {}
