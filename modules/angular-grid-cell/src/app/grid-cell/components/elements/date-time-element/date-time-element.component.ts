import { Component, Input, OnInit } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { DateTimeElement } from './classes/date-time-element';
import * as moment from 'moment';

const momentConstructor = moment;

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent extends BaseElementComponent implements OnInit {
  @Input() element: DateTimeElement;
  elementData: string;

  ngOnInit(): void {
    if (typeof(this.element.elementField) === 'string') {
      this.elementData = this.data[this.element.elementField];
    } else {
      this.elementData = this.element.elementField(this.data);
    }
    switch (this.element.func) {
      case 'fromNow':
        this.elementData = momentConstructor(this.elementData).fromNow();
        break;
      case 'format':
        this.elementData = momentConstructor(this.elementData).format(this.element.format);
        break;
    }
  }
}
