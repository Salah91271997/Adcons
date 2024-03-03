import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Leadership } from '../../interfaces/about-us';

@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
})
export class LeadershipComponent implements OnInit {
  @Input() leadership: Leadership[] | undefined;
  @Input() leadershipTitle: string | undefined;
  imgUrl = environment.baseUrl;
  constructor() {}

  ngOnInit(): void {}
}
