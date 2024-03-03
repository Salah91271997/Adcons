import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CareerItem } from '../../interfaces/careers';

@Component({
  selector: 'career-item',
  templateUrl: './careers-grid.component.html',
  styleUrls: ['./careers-grid.component.scss'],
})
export class CareersGridComponent implements OnInit {
  @Input() careerItem: CareerItem = {
    description: '',
    id: '',
    image: '',
    name: '',
  };
  imgUrl: string = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {
  }
}
