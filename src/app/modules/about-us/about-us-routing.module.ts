import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages';
import { AboutUsResolverResolver } from './resolver/about-us-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    data: { title: 'ABOUT_US' },
    resolve: { aboutUs: AboutUsResolverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
