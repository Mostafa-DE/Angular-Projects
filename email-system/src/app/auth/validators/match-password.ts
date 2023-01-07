import {AbstractControl, Validator} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validator {
  validate(formGroup: AbstractControl) {
    const {password, passwordConfirmation} = formGroup.value;
    if (password === passwordConfirmation) return null;
    return {passwordsDontMatch: true};
  }

}
