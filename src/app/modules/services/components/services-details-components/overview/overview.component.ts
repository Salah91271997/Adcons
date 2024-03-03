import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() overviewTitle: string | undefined;
  @Input() overviewDesc: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
