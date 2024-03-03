import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrls: ['./awards-section.component.scss'],
})
export class AwardsSectionComponent implements OnInit {
  @Input('item') item!: any;
  imgUrl = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {}
}
