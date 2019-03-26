import { Component, Input } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';
import { DateTimeElement } from './classes/date-time-element';

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent extends BaseElementComponent {
  @Input() element: DateTimeElement;
  @Input() data: any;
}
