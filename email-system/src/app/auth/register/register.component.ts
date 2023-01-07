import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ],
      asyncValidators: [this.uniqueUsername.validate]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
    }),
    passwordConfirmation: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
    }),
  }, {validators: [this.matchPassword.validate]});

  get username() {
    return this.authForm.controls.username;
  }

  get password() {
    return this.authForm.controls.password;
  }

  get passwordConfirmation() {
    return this.authForm.controls.passwordConfirmation;
  }

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onAuthFormSubmit() {
    if (this.authForm.invalid) return;
    const {username, password, passwordConfirmation} = this.authForm.value;
    if (username && password && passwordConfirmation) {
      const data = {username, password, passwordConfirmation};
      this.authService.registerUser({...data})
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/inbox');
          },
          error: (err) => {
            if (err.status === 0) {
              this.authForm.setErrors({noConnection: true});
            } else {
              this.authForm.setErrors({unknownError: true});
            }
          },
        })
    }
  }


}
