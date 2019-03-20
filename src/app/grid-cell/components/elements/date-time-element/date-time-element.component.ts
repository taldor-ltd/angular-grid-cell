import { Component, OnInit, Input } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent extends ColumnElement implements OnInit {
  ngOnInit() {
  }

}
