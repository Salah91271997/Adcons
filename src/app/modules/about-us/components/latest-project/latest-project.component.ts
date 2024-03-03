import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Aboutus } from '../../interfaces/about-us';

@Component({
  selector: 'latest-project',
  templateUrl: './latest-project.component.html',
  styleUrls: ['./latest-project.component.scss'],
})
export class LatestProjectComponent implements OnInit {
  constructor() {}
  @Input() project: Aboutus | undefined;
  imgUrl = environment.baseUrl;
  ngOnInit(): void {}
}
