import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActive]',
})
export class ActiveDirective {
  constructor(el: ElementRef, private renderer: Renderer2) {
    this.renderer.listen(el.nativeElement, 'click', () => {
      const spans = (el.nativeElement as HTMLElement).querySelectorAll(
        '.swiper-pagination-bullet '
      );
      spans.forEach((span, index) => {
        let currentIndex;
        if (span.classList.contains('swiper-pagination-bullet-active')) {
          currentIndex = index;
          for (let i = 0; i < currentIndex; i++) {
            spans[i].classList.add('swiper-pagination-bullet-active');
          }
        }
      });
    });
  }
}
