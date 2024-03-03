import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Home } from '../../interfaces/home';

@Component({
  selector: 'contact',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  isArabic: boolean = false;
  @Input('item') item!: Home;
  imgUrl = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {}
}
