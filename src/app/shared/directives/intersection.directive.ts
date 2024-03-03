import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { debounceTime, Observable } from 'rxjs';

@Directive({
  selector: '[Intersection]',
  exportAs: 'intersection',
})
export class IntersectionDirective {
  @Input() root: HTMLElement | null = null;
  @Input() rootMargin = '0px 0px 0px 0px';
  @Input() threshold = 0.1;
  @Input() debounceTime = 0;
  @Input() isContinuous = true;

  @Output() isIntersecting = new EventEmitter<boolean>();

  intersecting = false;

  constructor(private element: ElementRef) {
    this.createAndObserve();
  }
  createAndObserve() {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    return new Observable<boolean>((subscriber) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        subscriber.next(isIntersecting);

        isIntersecting &&
          !this.isContinuous &&
          intersectionObserver.disconnect();
      }, options);

      intersectionObserver.observe(this.element.nativeElement);

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        },
      };
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe((status) => {
        this.isIntersecting.emit(status);
        this.intersecting = status;
      });
  }
}
