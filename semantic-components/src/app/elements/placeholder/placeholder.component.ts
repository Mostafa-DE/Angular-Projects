import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() numberOfLines: number = 10;
  @Input() isHeaderShown = true;

  constructor() { }

  ngOnInit(): void {
  }

}
