import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  of,
  withLatestFrom,
} from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ProjectsDetailsGetResponse } from '../../../interfaces/projects-details';
import { ProjectDetailsActions } from '../action/projects-details-type';
import { selectProjectsDetailsLoaded } from '../selectors/projects-details.selectors';

@Injectable()
export class ProjectsDetailsEffects {
  projectsDetailsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDetailsActions.loadProjectsDetail),
      concatMap((action) =>
        of(action.id).pipe(
          withLatestFrom(
            this.store.select(selectProjectsDetailsLoaded(action.id))
          ),
          map(([id, loaded]): [string, boolean] => [id, loaded])
        )
      ),
      exhaustMap(([id, loaded]) =>
        loaded
          ? of([id, null])
          : this.ProjectsServices.get(`/api/service/product/${id}`).pipe(
              map((res): [string, ProjectsDetailsGetResponse] => [id, res]),
              catchError((error) => of({ error }))
            )
      ),
      map(([id, ProjectsDetails]: any) => {
        return ProjectDetailsActions.ProjectsDetailLoaded({
          id,
          ProjectsDetails: ProjectsDetails,
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private ProjectsServices: HttpService,
    private store: Store
  ) {}
}
