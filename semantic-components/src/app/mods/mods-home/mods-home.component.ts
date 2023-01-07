import {Component, OnInit} from '@angular/core';
import {AccordionData} from "../../shared/models/interfaces";

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  accordionData: AccordionData[] = [
    {title: 'Accordion 1', content: 'Accordion 1 Content'},
    {title: 'Accordion 2', content: 'Accordion 2 Content'},
    {title: 'Accordion 3', content: 'Accordion 3 Content'}
  ]

  onClickShowModal() {
    this.showModal = !this.showModal;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
