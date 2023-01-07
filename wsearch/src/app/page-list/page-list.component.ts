import {Component, Input, OnInit} from '@angular/core';

interface IData {
  title: string;
  snippet: string;
  wordcount: number;
  pageid: number;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() data: IData[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
