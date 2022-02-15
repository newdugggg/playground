import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  @Input() color?: string = '';
  @Input() exitColor: string;
  @Input() focus
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') mouseEntered() {
    this.el.nativeElement.style.color = this.color || 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.color = 'gold';
  }


}
