import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
  @Input() jobDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
