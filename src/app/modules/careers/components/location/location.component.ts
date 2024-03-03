import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @Input() locationDetails: {
    location: string;
    work_days: string;
  } = {
    location: '',
    work_days: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
