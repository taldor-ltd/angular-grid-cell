import { Component, OnInit, Input } from '@angular/core';
import { IColumnElement } from 'src/app/grid-cell/models/interfaces/IColumnElement';

@Component({
  selector: 'tld-date-time-element',
  templateUrl: './date-time-element.component.html',
  styleUrls: ['./date-time-element.component.css']
})
export class DateTimeElementComponent implements OnInit {

  @Input() columnElement: IColumnElement;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
