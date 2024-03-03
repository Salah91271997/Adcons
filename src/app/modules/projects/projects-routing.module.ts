import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: { title: 'PROJECTS' },
  },
  {
    path: 'details/:id',
    component: ProjectDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
