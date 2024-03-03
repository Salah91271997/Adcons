import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss'],
})
export class Error500Component implements OnInit {
  errorNumber = 500;
  errorTitle = 'SERVER_ERROR';
  errorMessage = 'WRONG_SERVER';

  constructor() {}

  ngOnInit(): void {}
}
