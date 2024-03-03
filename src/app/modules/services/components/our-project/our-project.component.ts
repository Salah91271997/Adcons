import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicePage } from '../../interfaces/services';

@Component({
  selector: 'our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.scss'],
})
export class OurProjectComponent implements OnInit {
  constructor() {}
  @Input() project: ServicePage | undefined;
  imgUrl = environment.baseUrl;

  ngOnInit(): void {}
}
