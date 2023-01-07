import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface Photo {
  urls: {
    full: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchingService {

  constructor(
    private http: HttpClient
  ) { }

  getPhoto() {
    return this.http.get<Photo>('https://api.unsplash.com/photos/random/', {
      headers: {
        Authorization: "Client-ID z7AHaFWZO2-fv8x-_SVNopAmcpJU0XnB3HiAnxsJL_4"
      }
    });
  }
}
