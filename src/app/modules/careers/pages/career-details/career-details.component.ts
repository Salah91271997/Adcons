import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CareerDetails } from '../../interfaces/careers';
import { loadCarrerDetails } from '../../store/career-details/actions/career-details.actions';
import { selectCareersDetailsContent } from '../../store/career-details/selectors/career-details.selectors';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss'],
})
export class CareerDetailsComponent implements OnInit {
  public pageSlug: string = '';
  carrerDetails$!: Observable<CareerDetails | null>;
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.getSlug();
    this.carrerDetails$ = this.store.select(
      selectCareersDetailsContent(this.pageSlug)
    );
    this.store.dispatch(loadCarrerDetails({ id: this.pageSlug }));
  }
  // Get The Page Slug
  getSlug() {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.pageSlug = res['id'];
      },
    });
  }
}
