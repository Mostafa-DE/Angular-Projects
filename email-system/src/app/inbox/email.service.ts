import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IEmails {
  id: string;
  subject: string;
  from: string;
}

export interface IEmail {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  readonly API_ROOT_URL = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {
  }

  getEmails() {
    return this.http.get<IEmails[]>(`${this.API_ROOT_URL}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<IEmail>(`${this.API_ROOT_URL}/emails/${id}`);
  }

  sendEmail(email: Omit<IEmail, "id" | "html">) {
    return this.http.post<IEmail>(`${this.API_ROOT_URL}/emails`, email);
  }

}
