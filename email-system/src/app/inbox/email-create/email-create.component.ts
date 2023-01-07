import {Component, OnInit} from '@angular/core';
import {IEmail} from "../email.service";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModel = false;
  email: IEmail;

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      subject: '',
      from: `${this.authService.username}@angular-email.com`,
      to: '',
      text: '',
      html: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(email: Omit<IEmail, 'id' | 'html'>) {
    this.emailService.sendEmail(email)
      .subscribe(
        (email: Omit<IEmail, 'id' | 'html'>) => {
          console.log(email);
          this.showModel = false;
        }
      );
  }

}
