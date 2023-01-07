import { Component, OnInit } from '@angular/core';
import {RowData, HeaderData} from "../../shared/models/interfaces";

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: RowData[] = [
    { name: 'John', age: 30, job: 'Designer', isEmployed: true },
    { name: 'Alex', age: 25, job: 'Engineer', isEmployed: false },
    { name: 'Bob', age: 35, job: 'Developer', isEmployed: true },
  ];

  headers: HeaderData[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'isEmployed', label: 'Has a job??' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
