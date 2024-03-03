import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  imgUrl = environment.baseUrl;
  @Input() serviceItem: any;
  constructor() {}

  ngOnInit(): void {}
}
