import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages';
import { ContactResolverResolver } from './resolver/contact-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    data: { title: 'CONTACT_US' },
    resolve: { contactUs: ContactResolverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
