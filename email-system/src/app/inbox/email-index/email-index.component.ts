import {Component, OnInit} from '@angular/core';
import {EmailService, IEmails} from "../email.service";


@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails: IEmails[];

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.getEmails();
  }

  getEmails() {
    return this.emailService.getEmails()
      .subscribe((emails) => {
        this.emails = emails;
      })
  }

}
