import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import {
  ProductFilters,
  Project,
  ProjectGetResponse,
  Projects,
  ProjectsResonse,
} from '../../../interfaces/projects';
import { ProjectPageFilterActions } from '../../project-filter/actions/Project-filter-type';
import { ProjectPageContentActions } from '../../project-page/actions/Project-page-type';
import { ProjectPageActions } from '../actions/Projects-type';
import {
  selectProjectList,
  selectProjectState,
} from '../selectors/Projects-selectors';

@Injectable()
export class ProductPageEffects {
  productListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectPageActions.loadProductPage),
      withLatestFrom(this.store.select(selectProjectList('all'))),
      exhaustMap(([type, state]) => {
        return !state
          ? this.productServices
              .get<ProjectGetResponse>('/api/service/product/')
              .pipe(
                tap((res: ProjectGetResponse) => {
                  let filters: ProductFilters = {
                    services: res.filters.services,
                    sectors: res.filters.sectors,
                    years: res.filters.years.map((year) => ({
                      id: year,
                      name: year,
                    })),
                  };
                  this.store.dispatch(
                    ProjectPageFilterActions.productPageFilter({ filters })
                  );

                  this.store.dispatch(
                    ProjectPageContentActions.productPageContent({
                      page: res.product_page,
                    })
                  );
                }),
                map((res: ProjectGetResponse): Projects => {
                  return mapResult(res.products, 'all', 1);
                }),
                catchError((error) => of({ error }))
              )
          : of(null);
      }),
      map((res: any) => {
        if (res && 'error' in res) {
          return ProjectPageActions.productpageFail({
            error: res.error,
            errorMessage: '',
          });
        }
        return ProjectPageActions.productPageLoaded({ projects: res });
      })
    )
  );
  productFilterEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectPageActions.productFilterLoad),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(selectProjectList(action.id))),
          map(
            ([payload, projects]): [
              { id: string | number; filter: 'service' | 'sector' | 'year' },
              Project[] | undefined
            ] => {
              return [payload, projects];
            }
          )
        )
      ),
      exhaustMap(([payload, projects]) => {
        return !projects
          ? this.productServices
              .get<ProjectsResonse>(
                `/api/service/product/filters/?${payload.filter}=${payload.id}`
              )
              .pipe(
                map(
                  (
                    res: ProjectsResonse
                  ): { res: Projects; id: string | number } => {
                    return {
                      res: mapResult(res, payload.id, 1),
                      id: payload.id,
                    };
                  }
                ),
                catchError((error) => of({ error }))
              )
          : of(null);
      }),
      map((res: any) => {
        if (res && 'error' in res) {
          return ProjectPageActions.productpageFail({
            error: res.error,
            errorMessage: '',
          });
        }
        return ProjectPageActions.productFilterLoaded({
          projects: res?.res,
          id: res?.id,
        });
      })
    )
  );
  productFilterNextEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectPageActions.loadproductFilterNext),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(selectProjectState)),
          map(
            ([payload, projects]): [
              {
                pagination: number;
                id: string | number;
                filter: 'service' | 'sector' | 'year';
              },
              Project[] | undefined
            ] => {
              return [payload, projects[action.id][action.pagination]?.results];
            }
          )
        )
      ),
      exhaustMap(([payload, projects]) => {
        let url = `/api/service/product/filters/?page=${payload.pagination}`;
        if (payload.id != 'all') url += `&${payload.filter}=${payload.id}`;
        return !projects
          ? this.productServices.get<ProjectsResonse>(url).pipe(
              map(
                (
                  res: ProjectsResonse
                ): {
                  projects: ProjectsResonse;
                  id: string | number;
                  currntPage: number;
                } => {
                  return {
                    projects: res,
                    id: payload.id,
                    currntPage: payload.pagination,
                  };
                }
              ),
              catchError((error) => of({ error }))
            )
          : of({ id: payload.id, currntPage: payload.pagination });
      }),
      map((res: any) => {
        if (res && 'error' in res) {
          return ProjectPageActions.productpageFail({
            error: res.error,
            errorMessage: '',
          });
        }
        if (!res.projects) {
          res = {
            projects: null,
            id: res.id,
            currntPage: res.currntPage,
          };
        }
        return ProjectPageActions.productFilterNextLoaded(res);
      })
    )
  );
  constructor(
    private actions$: Actions,
    private productServices: HttpService,
    private store: Store
  ) {}
}
function mapResult(
  res: ProjectsResonse,
  key: string | number,
  pageNumber: number
) {
  let ProjectDict: Projects = {
    [key]: { [pageNumber]: res, currentPage: pageNumber },
  };
  return ProjectDict;
}
