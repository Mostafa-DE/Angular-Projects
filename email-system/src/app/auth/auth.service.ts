import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";


type ServerResponse = Record<'username', string> | Record<'available', boolean>;

interface IRegisterForm {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface ILoginForm {
  username: string;
  password: string;
}

interface ISignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API_AUTH_URL = 'https://api.angular-email.com/auth';
  isUserSignedIn$ = new BehaviorSubject<boolean>(false);
  username = '';

  constructor(private http: HttpClient) {
  }

  checkUniqueUsername(username: string) {
    return this.http.post<ServerResponse>(`${this.API_AUTH_URL}/username`, {username});
  }

  registerUser(data: IRegisterForm) {
    return this.http.post<Pick<IRegisterForm, 'username'>>(`${this.API_AUTH_URL}/signup`, data)
      .pipe(
        tap(({username}) => {
          this.isUserSignedIn$.next(true)
          this.username = username;
        })
      );
  }

  loginUser(data: ILoginForm) {
    return this.http.post<Pick<ILoginForm, 'username'>>(`${this.API_AUTH_URL}/signin`, data)
      .pipe(
        tap(({username}) => {
          this.isUserSignedIn$.next(true)
        })
      );
  }

  logoutUser() {
    return this.http.post(`${this.API_AUTH_URL}/signout`, {})
      .pipe(tap(() => this.isUserSignedIn$.next(false)));
  }

  checkUserSignedIn() {
    return this.http.get<ISignedInResponse>(`${this.API_AUTH_URL}/signedin`)
      .pipe(
        tap(({authenticated, username}) => {
          this.isUserSignedIn$.next(authenticated)
          this.username = username;
        })
      );
  }
}
