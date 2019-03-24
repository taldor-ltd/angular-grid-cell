import { Component, OnInit } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent extends BaseElementComponent implements OnInit {
  ngOnInit() {
  }

}
