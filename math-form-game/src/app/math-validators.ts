import {AbstractControl} from "@angular/forms";

export class MathValidators {

  static addition(sourceOne: string, sourceTwo: string, target: string) {
    return (form: AbstractControl) => {
      const value1 = form.value[sourceOne];
      const value2 = form.value[sourceTwo];
      const summation = form.value[target];
      if (value1 + value2 === parseInt(summation)) {
        return null;
      }
      return {addition: true};
    }

  }
}
