import { Component, OnInit, Input } from '@angular/core';
import { IColumnElement } from 'src/app/grid-cell/models/interfaces/IColumnElement';

@Component({
  selector: 'tld-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent implements OnInit {

  @Input() columnElement: IColumnElement;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
