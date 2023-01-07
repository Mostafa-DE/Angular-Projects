import {Component, Input, OnInit} from '@angular/core';
import {RowData, HeaderData} from "../../shared/models/interfaces";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: RowData[] = [];
  @Input() headers: HeaderData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
