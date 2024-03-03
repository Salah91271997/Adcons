import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import { Project } from '../../interfaces/projects';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit, OnDestroy {
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  @Input('item') item!: Project;
  imgUrl = environment.baseUrl;
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
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
