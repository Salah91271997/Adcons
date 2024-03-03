import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../../interfaces/home';

@Component({
  selector: 'app-value-section',
  templateUrl: './value-section.component.html',
  styleUrls: ['./value-section.component.scss'],
})
export class ValueSectionComponent implements OnInit {
  @Input('item') item!: Home;
  constructor() {}

  ngOnInit(): void {}
}
