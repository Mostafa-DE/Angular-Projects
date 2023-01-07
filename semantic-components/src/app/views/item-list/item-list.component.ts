import {Component, Input, OnInit} from '@angular/core';
import {ListItem} from "../../shared/models/interfaces";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() listItems: ListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
