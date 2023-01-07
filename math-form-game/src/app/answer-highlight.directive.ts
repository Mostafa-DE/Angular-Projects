import {Directive, ElementRef, OnInit} from '@angular/core';
import {NgControl} from "@angular/forms";
import {map} from "rxjs/operators";

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective implements OnInit {

  constructor(private el: ElementRef, private controlName: NgControl) {
  }

  ngOnInit() {
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map(({value1, value2, answer}) => Math.abs((value1 + value2 - answer) / (value1 + value2)))
      )
      .subscribe(value => {
        if (value < 0.2) {
          this.el.nativeElement.classList.add('close');
        } else {
          this.el.nativeElement.classList.remove('close');
        }
      })
  }

}
