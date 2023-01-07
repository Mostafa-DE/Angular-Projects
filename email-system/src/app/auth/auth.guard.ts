import {Injectable} from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  UrlTree,
  Router,
} from '@angular/router';
import {Observable, skipWhile, take, tap} from 'rxjs';
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.authService.isUserSignedIn$.pipe(
      skipWhile(value => value === null),
      take(1),
    )
  }
}
