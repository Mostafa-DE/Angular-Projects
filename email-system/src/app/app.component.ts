import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserSignedIn$: BehaviorSubject<boolean>
  constructor(private authService: AuthService) {
    this.isUserSignedIn$ = this.authService.isUserSignedIn$;
  }

  ngOnInit() {
    this.authService.checkUserSignedIn().subscribe(() => {});
  }

}
