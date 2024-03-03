import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  constructor() {}
  @Input() title: string | undefined;
  @Input() description: string | undefined;

  ngOnInit(): void {}
}
