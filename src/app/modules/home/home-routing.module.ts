import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiesResolver } from '../services/resolver/servies.resolver';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'MENU.HOME',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
