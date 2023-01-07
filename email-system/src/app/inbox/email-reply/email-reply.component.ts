import {Component, Input, OnInit} from '@angular/core';
import {EmailService, IEmail} from "../email.service";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  showModel = false;
  @Input() email: IEmail;

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `Re: ${this.email.subject}`,
      text: `\n\n\n---------- \n\n${this.email.from} wrote: ----------\n${this.email.text}`
    }
  }

  onSubmit(email: Omit<IEmail, "id" | "html">) {
    this.emailService.sendEmail(email)
      .subscribe(
        (email: Omit<IEmail, "id" | "html">) => {
          console.log(email);
          this.showModel = false;
        }
      )
  }

}
