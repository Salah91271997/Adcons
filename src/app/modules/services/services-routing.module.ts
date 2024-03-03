import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent, ServicesDetailsComponent } from './pages';
import { ServiesResolver } from './resolver/servies.resolver';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    data: { title: 'SERVICES' },
    // resolve: { services: ServiesResolver },
  },
  {
    path: ':slug',
    component: ServicesDetailsComponent,
    data: { title: 'SERVICES' },
    // resolve: { services: ServiesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
