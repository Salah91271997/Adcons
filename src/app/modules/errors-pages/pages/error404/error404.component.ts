import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  errorNumber = 'Error 404';
  errorTitle = 'NOT_FOUND_MAIN_TITLE';
  errorMessage = 'NOT_FOUND_TITLE';

  constructor() { }

  ngOnInit(): void {
  }

}
