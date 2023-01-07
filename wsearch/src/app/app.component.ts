import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private wikipediaService: WikipediaService) {
  }

  onTerm(value: string) {
    this.wikipediaService.search(value).subscribe((res: any) => {
      this.data = res.query.search;
    });
  }
}
