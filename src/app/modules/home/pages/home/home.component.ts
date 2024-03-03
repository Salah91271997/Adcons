import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { loadServices } from 'src/app/modules/services/store/actions/services-actions';
import { HomeGetResponse } from '../../interfaces/home';
import { loadHome } from '../../store/actions/home-actions';
import { selectHome } from '../../store/selectors/home-selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  home$: Observable<HomeGetResponse | null> | undefined;
  isArabic: boolean = false;
  private langUnsubscribe!: Subscription;
  constructor(
    private translationService: TranslationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadHome());
    this.home$ = this.store.select(selectHome);
    this.store.dispatch(loadServices());
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
  ngOnDestroy(): void {
    this.langUnsubscribe.unsubscribe();
  }
}
