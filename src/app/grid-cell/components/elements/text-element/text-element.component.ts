import { Component, OnInit, Input } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends ColumnElement implements OnInit {
  ngOnInit() {
  }
}
