import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AboutUs } from '../../interfaces/about-us';
import { getAboutUsData } from '../../store/selectors/about-us-selectors';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(private http: HttpService, private store: Store) {}
  aboutUsData$: Observable<AboutUs | null> | undefined;

  ngOnInit(): void {
    this.aboutUsData$ = this.store.select(getAboutUsData);
  }
}
