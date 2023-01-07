import { Component, OnInit } from '@angular/core';
import {ListItem, StatisticData} from '../../shared/models/interfaces';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  statistics: StatisticData[] = [
    { value: 100, label: 'Total Users' },
    { value: 200, label: 'Total Orders' },
    { value: 300, label: 'Total Products' },
    { value: 400, label: 'Total Sales' }
  ];

  listItems: ListItem[] = [
    {image: "/assets/images/couch.jpeg", title: "Couch", description: "This is a fancy couch"},
    {image: "/assets/images/dresser.jpeg", title: "Dresser", description: "This is a great dresser"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
