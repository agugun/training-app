import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldText]'
})
export class BoldTextDirective {

  constructor(public elem: ElementRef) { 
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('30')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('20')
  }

  private highlight(color: string) {
    this.elem.nativeElement.setAttribute('style', `font-size:${color}px !important;`)
  }

}
