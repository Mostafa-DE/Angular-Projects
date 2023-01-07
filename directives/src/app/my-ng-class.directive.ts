import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyNgClass]',
})
export class MyNgClassDirective {
  constructor(private el: ElementRef) {}

  @Input('appMyNgClass') set classStyle(classObj: Record<string, boolean>) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.el.nativeElement.classList.add(key);
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
}
