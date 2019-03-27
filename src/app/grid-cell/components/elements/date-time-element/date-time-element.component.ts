import { Component, Input, OnInit } from '@angular/core';
import { BaseElementComponent } from '../../../../grid-cell/models/classes/base-element-component';
import { DateTimeElement } from './classes/date-time-element';

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent extends BaseElementComponent implements OnInit {
  @Input() element: DateTimeElement;
  elementData: Date;

  ngOnInit(): void {
    if (typeof(this.element.elementField) === 'string') {
      this.elementData = this.data[this.element.elementField];
    } else {
      this.elementData = this.element.elementField();
    }
  }
}
