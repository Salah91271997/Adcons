import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactUs } from '../../interfaces/contact-us';
import { getcontactUs } from '../../store/selectors/contact-us-selectors';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(private store: Store) {}
  contactUsData$: Observable<ContactUs | null> | undefined;
  ngOnInit(): void {
    this.contactUsData$ = this.store.select(getcontactUs);
  }
}
