import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserSignedIn$: BehaviorSubject<boolean>

  constructor(private authService: AuthService) {
    this.isUserSignedIn$ = this.authService.isUserSignedIn$;
  }

  ngOnInit(): void {
  }

}
