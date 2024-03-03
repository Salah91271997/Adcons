import { Component, Input, OnInit } from '@angular/core';
import { Aboutus } from '../../interfaces/about-us';

@Component({
  selector: 'mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  constructor() {}
  @Input() mission: Aboutus | undefined;
  ngOnInit(): void {}
}
