import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../../interfaces/about-us';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  numbers: number[];
  imgNumbers: number[];
  constructor() {
    this.numbers = Array(19)
      .fill(0)
      .map((x, i) => i);
    this.imgNumbers = Array(9)
      .fill(0)
      .map((x, i) => i);
  }
  @Input() location: Location[] | undefined;
  imgUrl = environment.baseUrl;
  ngOnInit(): void {}
}
