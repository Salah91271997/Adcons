import { Component, Input, OnInit } from '@angular/core';
import { ServicePage } from '../../interfaces/services';
@Component({
  selector: 'lets-build',
  templateUrl: './lets-build.component.html',
  styleUrls: ['./lets-build.component.scss'],
})
export class LetsBuildComponent implements OnInit {
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
  @Input() build: any;
  ngOnInit(): void {}
}
