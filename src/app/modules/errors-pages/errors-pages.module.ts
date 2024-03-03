import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsPagesRoutingModule } from './errors-pages-routing.module';

import {
  Error404Component,
  Error500Component,
  ErrorsPagesComponent,
} from './pages';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [Error404Component, Error500Component, ErrorsPagesComponent],
  imports: [CommonModule, ErrorsPagesRoutingModule, SharedModule],
})
export class ErrorsPagesModule {}
