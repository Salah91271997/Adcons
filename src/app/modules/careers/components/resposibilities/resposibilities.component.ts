import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resposibilities',
  templateUrl: './resposibilities.component.html',
  styleUrls: ['./resposibilities.component.scss'],
})
export class ResposibilitiesComponent implements OnInit {
  @Input() title: string = '';
  @Input() responsibilities: string = '';
  constructor() {}

  ngOnInit(): void {}
}
