import { createAction, props } from '@ngrx/store';
import { ProjectPage } from '../../../interfaces/projects';

export const productPageContent = createAction(
  '[productListComponent] project page  Content',
  props<{ page: ProjectPage }>()
);
