import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import {
  ProductFilters,
  Project,
  ProjectPage,
} from '../../interfaces/projects';
import { selectProjectFilter } from '../../store/project-filter/selectors/Project-filter-selectors';
import { selectProjectContent } from '../../store/project-page/selectors/Project-page-selectors';
import { ProjectPageActions } from '../../store/projects/actions/Projects-type';
import {
  selectProjectCurrentPage,
  selectProjectList,
  selectProjectNumberOfPages,
} from '../../store/projects/selectors/Projects-selectors';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  filters$!: Observable<ProductFilters>;
  page$!: Observable<ProjectPage>;
  projectPageNumber$!: Observable<number[]>;
  currentPageNumber$!: Observable<number>;
  projects$!: Observable<Project[]>;
  filterId: string | number = 'all';
  curentSelect: 'services' | 'sectors' | 'years' = 'sectors';
  types: any = {
    sectors: { ar: 'sectors', en: 'شريحة' },
    services: { ar: 'services', en: 'خدمات' },
    years: { ar: 'years', en: 'سنوات' },
  };
  // currentPageNumber: number = 1;
  filtersTypes!: [];
  selectedFilter!: [];
  constructor(
    private translationService: TranslationService,
    private store: Store
  ) {
    // this.filtersTypes=this.type
  }

  ngOnInit(): void {
    this.appLang();
    this.store.dispatch(ProjectPageActions.loadProductPage());
    this.filters$ = this.store.select(selectProjectFilter);
    this.page$ = this.store.select(selectProjectContent);
    this.projects$ = this.store.select(selectProjectList(this.filterId));
    this.projectPageNumber$ = this.store.select(
      selectProjectNumberOfPages(this.filterId)
    );
    this.currentPageNumber$ = this.store.select(
      selectProjectCurrentPage(this.filterId)
    );
  }

  // Get App Lang
  appLang() {
    this.langUnsubscribe = this.translationService.isArabic$.subscribe(
      (val) => {
        this.isArabic = val;
      }
    );
  }
  mapKeys(types: any): string[] {
    return Object.keys(types);
  }
  changeFilters(key: any) {
    this.curentSelect = key;
    this.projects$ = this.store.select(selectProjectList('all'));
    this.filterId = 'all';
    this.projectPageNumber$ = this.store.select(
      selectProjectNumberOfPages('all')
    );
    this.currentPageNumber$ = this.store.select(
      selectProjectCurrentPage(this.filterId)
    );
  }
  changeFilterId(id: string | number, currentPage: number) {
    this.filterId = id;

    this.store.dispatch(
      ProjectPageActions.productFilterLoad({ id, filter: this.getFilterName() })
    );
    this.projects$ = this.store.select(selectProjectList(this.filterId));
    this.projectPageNumber$ = this.store.select(
      selectProjectNumberOfPages(this.filterId)
    );
    this.currentPageNumber$ = this.store.select(
      selectProjectCurrentPage(this.filterId)
    );
  }

  paginate(page: number, pages: number[]) {
    if (page < 1 || page > pages.length) return;

    this.store.dispatch(
      ProjectPageActions.loadproductFilterNext({
        pagination: page,
        id: this.filterId,
        filter: this.getFilterName(),
      })
    );
    // this.projects$ = this.store.select(selectProjectList(this.filterId, page));
  }
  private getFilterName() {
    let filter!: 'service' | 'sector' | 'year';
    if (this.curentSelect === 'sectors') filter = 'sector';
    if (this.curentSelect === 'services') filter = 'service';
    if (this.curentSelect === 'years') filter = 'year';
    return filter;
  }
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
