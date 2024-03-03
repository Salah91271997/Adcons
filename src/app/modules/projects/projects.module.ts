import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AwardsSectionComponent } from './components/awards-section/awards-section.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { KingSectionComponent } from './components/king-section/king-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectsComponent } from './pages';
import { ProjectsRoutingModule } from './projects-routing.module';
import { projectPageFilterReducer } from './store/project-filter/reducers/Project-filter-reducers';
import { projectPageContentReducer } from './store/project-page/reducers/Project-page-reducers';
import { ProjectsDetailsEffects } from './store/projects-details/effects/projects-details.effects';
import { ProjectsDetailsReducer } from './store/projects-details/reducers/projects-details.reducers';
import { ProductPageEffects } from './store/projects/effects/Projects-effects';
import { projectPageReducer } from './store/projects/reducers/Projects-reducers';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
    KingSectionComponent,
    DetailsSectionComponent,
    ImageSectionComponent,
    LocationSectionComponent,
    AwardsSectionComponent,
    ProjectsSectionComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProjectsRoutingModule,
    GalleriaModule,
    DropdownModule,
    SlideMenuModule,
    StoreModule.forFeature('projects', projectPageReducer),
    StoreModule.forFeature('projectsContent', projectPageContentReducer),
    StoreModule.forFeature('projectsFilter', projectPageFilterReducer),
    StoreModule.forFeature('ProjectsDetails', ProjectsDetailsReducer),
    EffectsModule.forFeature([ProductPageEffects, ProjectsDetailsEffects]),
    ChartModule,
    SwiperModule,
  ],
})
export class ProjectsModule {}
