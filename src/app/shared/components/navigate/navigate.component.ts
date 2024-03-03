import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss'],
})
export class NavigateComponent implements OnInit {
  @Input() linksName: string[] = [];
  @Input() pathes: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
