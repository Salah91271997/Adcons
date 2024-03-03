import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Active]',
})
export class ActiveDirective {
  constructor(el: ElementRef, private renderer: Renderer2) {
    this.renderer.listen(el.nativeElement, 'click', () => {});
  }
}
