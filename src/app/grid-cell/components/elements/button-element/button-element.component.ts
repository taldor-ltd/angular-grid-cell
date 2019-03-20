import { Component, OnInit, Input } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent extends ColumnElement implements OnInit {
  ngOnInit() {
  }

}
