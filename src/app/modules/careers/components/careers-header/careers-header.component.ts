import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'careers-header',
  templateUrl: './careers-header.component.html',
  styleUrls: ['./careers-header.component.scss'],
})
export class CareersHeaderComponent implements OnInit {
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  constructor() {}

  ngOnInit(): void {}
}
