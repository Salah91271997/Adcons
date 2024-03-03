import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  constructor() {}
  @Input() quote: string | undefined;
  ngOnInit(): void {}
}
