import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss'],
})
export class PatternComponent implements OnInit, AfterViewInit {
  imgNumbers: number[];
  numbers: number[] | undefined;
  rows: number[] | undefined;
  @ViewChild('image') image!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.imgNumbers = Array(9)
      .fill(0)
      .map((x, i) => i);
  }
  @Input() patternNumber: number | undefined;
  @Input() rowNumber: number | undefined;
  @Input() opacity: number = 0.05;
  @Input() opacityHover: number = 0.6;

  ngOnInit(): void {
    this.numbers = Array(this.patternNumber)
      .fill(0)
      .map((x, i) => i);

    this.rows = Array(this.rowNumber)
      .fill(0)
      .map((x, i) => i);
  }

  ngAfterViewInit(): void {
    const container: HTMLElement = this.image.nativeElement;
    container
      .querySelectorAll('img')
      .forEach((image) => (image.style.opacity = `${this.opacity}`));
    const allSinglePatern = container.querySelectorAll('.single-patern ');
    allSinglePatern.forEach((singlePatern) => {
      this.renderer.listen(singlePatern, 'mouseenter', () => {
        singlePatern.querySelectorAll('img').forEach((img) => {
          img.style.opacity = `${this.opacityHover}`;
        });
      });
      this.renderer.listen(singlePatern, 'mouseleave', () => {
        singlePatern.querySelectorAll('img').forEach((img) => {
          setTimeout(() => {
            img.style.opacity = `${this.opacity}`;
          }, 300);
        });
      });
    });
  }
}
