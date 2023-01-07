import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
    })
  })


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegisterFormSubmit() {
    if (this.authForm.invalid) return;
    const {username, password} = this.authForm.value;
    if (username && password) {
      const data = {username, password};
      this.authService.loginUser({...data})
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/inbox');
          },
          error: (err) => {
            if (err.error.username || err.error.password) {
              this.authForm.setErrors({credential: true});
              return;
            }
            if (err.status === 0) {
              this.authForm.setErrors({noConnection: true});
              return;
            }
            this.authForm.setErrors({unknown: true});
          }
        })
    }
  }

}
