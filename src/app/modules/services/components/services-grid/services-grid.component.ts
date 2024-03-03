import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Services } from '../../interfaces/services';

@Component({
  selector: 'services-grid',
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.scss'],
})
export class ServicesGridComponent implements OnInit {
  constructor() {}
  @Input() services: Services | undefined;
  imgUrl = environment.baseUrl;

  ngOnInit(): void {}
}
