import {AbstractControl, AsyncValidator} from "@angular/forms";
import {map, of, catchError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";


@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  validate = (control: AbstractControl) => {
    const {value} = control;

    return this.authService.checkUniqueUsername(value)
      .pipe(
        map(() => {
          return null
        }),
        catchError((err) => {
          if (err.error.username) {
            return of({nonUniqueUsername: true})
          }
          return of({connection: true});
        })
      )

  }
}
