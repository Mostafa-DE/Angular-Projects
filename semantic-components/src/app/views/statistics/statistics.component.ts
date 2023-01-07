import {Component, Input, OnInit} from '@angular/core';
import {StatisticData} from "../../shared/models/interfaces";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: StatisticData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
