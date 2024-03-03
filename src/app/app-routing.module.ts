import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/main-layout';
import { ServiesResolver } from './modules/services/resolver/servies.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: { services: ServiesResolver },
    children: [
      {
        path: '', // until home is done
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./modules/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'careers',
        loadChildren: () =>
          import('./modules/careers/careers.module').then(
            (m) => m.CareersModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./modules/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./modules/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
    ],
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./modules/errors-pages/errors-pages.module').then(
        (m) => m.ErrorsPagesModule
      ),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
