import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent implements OnInit {
  @Input('item') item: any;
  imgUrl = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {}
}
