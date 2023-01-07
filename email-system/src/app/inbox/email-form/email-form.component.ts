import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IEmail} from "../email.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

type EmailForm = Omit<IEmail, 'html' | 'id'>

type ModelFormGroup<T> = FormGroup<{
  [key in keyof T]: FormControl<T[key] | null>
}>;


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email: IEmail;
  @Output() emailSubmit = new EventEmitter<EmailForm>();

  emailForm: ModelFormGroup<EmailForm>;

  constructor() {
  }

  ngOnInit(): void {
    const {subject, from, to, text} = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, Validators.required),
      text: new FormControl(text, Validators.required),
      from: new FormControl({value: from, disabled: true})
    })
  }

  onEmailFormSubmit() {
    if (this.emailForm.invalid) return;
    this.emailSubmit.emit(<EmailForm>this.emailForm.value);
  }

}
