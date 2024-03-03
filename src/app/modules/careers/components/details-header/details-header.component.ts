import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss'],
})
export class DetailsHeaderComponent implements OnInit {
  @Input() careerDetails: {
    details: string;
    location: string;
    work_type: string;
  } = {
    details: '',
    location: '',
    work_type: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
