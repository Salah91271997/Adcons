import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Service_products } from '../../../interfaces/services';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor() {}
  @Input() projects: Service_products[] | undefined;
  imgUrl = environment.baseUrl;
  ngOnInit(): void {}
  onPosition(index: number) {
    if (index == 0) {
      return 'order-last';
    }
    if (index % 2 == 0) {
      return 'order-last';
    }
    return '';
  }
}
