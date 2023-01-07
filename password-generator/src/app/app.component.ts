import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  length = 10;
  isLetters = false;
  isSymbols = false;
  isNumbers = false;

  generateRandomPassword() {
    const sliceNumber = Math.floor(Math.random() * 31);
    const randomNumbers = this.isNumbers ? Math.floor(Math.random() * 10000).toString() : "";
    const randomLetters = this.isLetters ? Math.random().toString(36).substring(2, 5).toString() : "";
    const randomSymbols = this.isSymbols ? "~!@#$%^&*()_+-=[]\\{}|;:'\",./<>?".slice(sliceNumber) : "";
    const randomPassword = randomNumbers + randomLetters + randomSymbols;
    return randomPassword.slice(0, this.length);
  }

  onSubmit(f: NgForm) {
    this.length = f.form.value.length;
    this.password = this.generateRandomPassword();
  }
}
