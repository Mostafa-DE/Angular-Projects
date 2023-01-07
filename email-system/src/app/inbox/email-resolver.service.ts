import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from "@angular/router";
import {IEmail} from "./email.service";
import {EmailService} from "./email.service";
import {catchError, Observable} from "rxjs";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<IEmail> {
  constructor(private emailService: EmailService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IEmail> {
    const {id} = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox');

        return EMPTY;
      })
    );
  }
}
