import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Services } from '../../interfaces/services';
import { getAllServices } from '../../store/selectors/services-selectors';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  serviceData$: Observable<Services | null> | undefined;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.serviceData$ = this.store.select(getAllServices);
  }
}
