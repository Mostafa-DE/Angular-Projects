import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IEmail} from "../email.service";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: IEmail;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({email}) => this.email = email);
  }

  ngOnInit(): void {
  }
}
