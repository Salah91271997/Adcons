import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ServiceDetails } from '../../interfaces/services';
import { loadServices } from '../../store/actions/services-actions';
import { loadServiceDetails } from '../../store/services-details-store/store/actions/service-details-actions';
import { selectServiceDetails } from '../../store/services-details-store/store/selectors/service-details-selectors';

@Component({
  selector: 'services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss'],
})
export class ServicesDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpServices: HttpService,
    private store: Store
  ) {}
  public pageSlug: string = '';

  serviceDetail$: Observable<ServiceDetails | null> | undefined;
  ngOnInit(): void {
    this.getSlug();

    // this.getData();
  }
  getDetails() {
    this.store.dispatch(loadServiceDetails({ id: this.pageSlug }));
    this.serviceDetail$ = this.store.select(
      selectServiceDetails(this.pageSlug)
    );
  }

  //  Get The Page Slug
  getSlug() {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.pageSlug = res['slug'];
        this.getDetails();
      },
    });
  }
}
