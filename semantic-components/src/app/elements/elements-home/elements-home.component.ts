import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent implements OnInit {
  numberOfLines: number = 5;
  isHeaderShown: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
