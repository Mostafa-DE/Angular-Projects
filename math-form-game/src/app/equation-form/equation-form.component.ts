import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MathValidators} from "../math-validators";
import {delay, filter, scan} from "rxjs/operators";

@Component({
  selector: 'app-equation-form',
  templateUrl: './equation-form.component.html',
  styleUrls: ['./equation-form.component.css']
})
export class EquationFormComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup({
    value1: new FormControl(this.getRandomInt()),
    value2: new FormControl(this.getRandomInt()),
    answer: new FormControl('')
  }, [MathValidators.addition('value1', 'value2', 'answer')]);

  get value1() {
    return this.mathForm.value.value1;
  }

  get value2() {
    return this.mathForm.value.value2;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(150),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, {numberSolved: 0, startTime: new Date()})

    ).subscribe(({numberSolved, startTime}) => {
      const currentTime = new Date().getTime();
      const oldTime = startTime.getTime();
      this.secondsPerSolution = ((currentTime - oldTime) / numberSolved) / 1000;

      this.mathForm.setValue({
        value1: this.getRandomInt(),
        value2: this.getRandomInt(),
        answer: ''
      })
    })
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

}
