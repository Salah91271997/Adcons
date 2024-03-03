import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component, Error500Component } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '404', component: Error404Component, data: { title: '404' } },
      { path: '500', component: Error500Component, data: { title: '500' } },
      { path: '', redirectTo: '404', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsPagesRoutingModule {}
