import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() type = 'text';
  @Input() controlType = 'input';

  constructor() {
  }

  ngOnInit(): void {
  }

  showErrors() {
    const {touched, errors, dirty} = this.control;
    return touched && errors && dirty;
  }

  errorMessage() {
    const {errors} = this.control;
    const errorParent = this.control.parent?.errors;
    console.log(errorParent);
    if (!errors) return;
    if (errors['required']) {
      return `${this.label} is required`;
    }
    if (errors['minlength']) {
      return `${this.label} must be at least ${errors['minlength'].requiredLength} characters`;
    }
    if (errors['maxlength']) {
      return `${this.label} must be at most ${errors['maxlength'].requiredLength} characters`;
    }
    if (errors['pattern']) {
      return `${this.label} must contain only lowercase letters and numbers`;
    }
    if (errors['nonUniqueUsername']) {
      return `${this.label} is already taken`;
    }
    if (errors['connection']) {
      return `Connection error`;
    }
    if (errors['email']) {
      return `Invalid email`;
    }
    return "";
  }

}
