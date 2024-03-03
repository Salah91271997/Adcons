import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Hover]',
})
export class HoverDirective {
  isIn: Boolean = true;
  constructor(el: ElementRef, private renderer: Renderer2) {
    const dropdown: HTMLElement = el.nativeElement;

    this.renderer.listen(dropdown, 'mouseenter', () => {
      dropdown.querySelector('.menu')?.classList.add('hover');
      const menu: HTMLElement | null = dropdown.querySelector('.menu');
      this.renderer.listen(menu, 'mouseenter', () => {
        this.isIn = false;
      });
      this.renderer.listen(menu, 'mouseleave', () => {
        this.isIn = true;
      });
    });

    this.renderer.listen(dropdown, 'mouseleave', () => {
      setTimeout(() => {
        this.isIn && dropdown.querySelector('.menu')?.classList.remove('hover');
      }, 800);
    });
  }
}
