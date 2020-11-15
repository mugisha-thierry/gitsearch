import { Directive,ElementRef,HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyling]'
})
export class StylingDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  this.setBgColor('')
}

setBgColor(color: string) {
  this.renderer.setStyle(
    this.elementRef.nativeElement,
    'backgroundColor',
    color
  )
}

@HostListener('mouseenter') onMouseEnter() {
  this.setBgColor('yellow')
}

@HostListener('mouseleave') onMouseLeave() {
  this.setBgColor('')
}
}
