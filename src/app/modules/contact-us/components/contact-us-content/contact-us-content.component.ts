import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us-content',
  templateUrl: './contact-us-content.component.html',
  styleUrls: ['./contact-us-content.component.scss'],
})
export class ContactUsContentComponent implements OnInit {
  @Input() contactUs: any;
  imgUrl = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {}
}
