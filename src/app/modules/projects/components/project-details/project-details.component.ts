import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { ProjectsDetailsGetResponse } from '../../interfaces/projects-details';
import { ProjectDetailsActions } from '../../store/projects-details/action/projects-details-type';
import { selectProjectsDetailsContent } from '../../store/projects-details/selectors/projects-details.selectors';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  projectsDetails$!: Observable<ProjectsDetailsGetResponse | null>;
  id!: string;
  constructor(
    private translationService: TranslationService,
    private store: Store,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.store.dispatch(
        ProjectDetailsActions.loadProjectsDetail({ id: params['id'] })
      );
      this.projectsDetails$ = this.store.select(
        selectProjectsDetailsContent(this.id)
      );
    });
    this.appLang();
  }

  // Get App Lang
  appLang() {
    this.langUnsubscribe = this.translationService.isArabic$.subscribe(
      (val) => {
        this.isArabic = val;
      }
    );
  }

  // Change App Lang
  changeLang() {
    this.translationService.changeLang();
  }
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
