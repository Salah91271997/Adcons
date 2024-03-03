import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerDetailsComponent, CareersComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent,
    data: { title: 'CAREER' },
  },
  {
    path: ':id',
    component: CareerDetailsComponent,
    data: { title: 'CAREER' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
