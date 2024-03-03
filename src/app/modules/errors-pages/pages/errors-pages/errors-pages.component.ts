import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';

@Component({
  selector: 'adkons-errors-pages',
  templateUrl: './errors-pages.component.html',
  styleUrls: ['./errors-pages.component.scss'],
})
export class ErrorsPagesComponent implements OnInit {
  @Input() errorNumber!: string | number;
  @Input() errorTitle!: string;
  @Input() errorMessage!: string;
  @Input() errorIframe!: string;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
  goBack(): void {
    const url = this.localStorage.getLocal('previousUrl');
    this.router.navigate([url]);
  }
}
