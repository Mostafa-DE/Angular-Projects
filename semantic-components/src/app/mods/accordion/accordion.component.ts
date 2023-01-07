import {Component, Input, OnInit} from '@angular/core';
import {AccordionData} from "../../shared/models/interfaces";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() accordionData: AccordionData[] = []
  currentIndex: number | null = null;

  onCollapse(index: number) {
    this.currentIndex = index === this.currentIndex ? null : index;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
