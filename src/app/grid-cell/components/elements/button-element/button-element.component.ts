import { Component, OnInit, Input } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent implements OnInit {

  @Input() columnElement: ColumnElement;
  @Input() data: any;

  constructor() {}

  ngOnInit() {
  }

}
