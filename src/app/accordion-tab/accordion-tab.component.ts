import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-tab',
  templateUrl: './accordion-tab.component.html',
  styleUrls: ['./accordion-tab.component.css']
})
export class AccordionTabComponent implements OnInit {
  @Input()  extended;
  @Input()  title;
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.toggle.next(null);
  }

}
