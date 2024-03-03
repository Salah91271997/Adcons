import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  layout: Element | null | undefined;

  constructor(private router: Router) {}

  /* Scroll To Top After Navigation Complete */
  ngOnInit(): void {
    this.layout = document.querySelector('.layout');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.layout?.scrollTo(0, 0);
    });
  }
}
