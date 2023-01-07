import {Component, OnInit} from '@angular/core';
import {PhotoFetchingService} from '../photo-fetching.service';


interface Photo {
  urls: {
    full: string
  }
}


@Component({
  selector: 'app-photo-fetching',
  templateUrl: './photo-fetching.component.html',
  styleUrls: ['./photo-fetching.component.css']
})
export class PhotoFetchingComponent implements OnInit {
  photo: Photo;
  loading = false;

  constructor(private photoService: PhotoFetchingService) {
  }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.loading = true;
    this.photoService.getPhoto().subscribe(
      {
        next: (data) => this.photo = data,
        error: () => console.log('error'),
        complete: () => this.loading = false
      }
    )
  }

}
