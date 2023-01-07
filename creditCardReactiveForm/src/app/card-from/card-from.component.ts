import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DateFormControl} from "../date-form-control";

@Component({
  selector: 'app-card-from',
  templateUrl: './card-from.component.html',
  styleUrls: ['./card-from.component.css']
})
export class CardFromComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3),
      Validators.maxLength(5),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9 ]*'),
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/), // MM/YY
    ]),
    cvv: new FormControl('', [Validators.required,
      Validators.required,
      Validators.pattern('[0-9 ]*'),
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cardForm);
  }

  onResetFormClick() {
    this.cardForm.reset();
  }

}
