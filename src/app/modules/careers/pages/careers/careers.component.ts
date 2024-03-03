import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Careers } from '../../interfaces/careers';
import {
  loadCareers,
  loadCarrersListNext,
} from '../../store/careers/actions/careers-actions';
import { selectCareersContent } from '../../store/careers/selectors/careers-selectors';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  careersContent$!: Observable<Careers | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.careersContent$ = this.store.select(selectCareersContent);
    this.loadData();
  }
  loadData() {
    this.store.dispatch(loadCareers());
  }
  loadMore() {
    this.store.dispatch(loadCarrersListNext());
  }
}
