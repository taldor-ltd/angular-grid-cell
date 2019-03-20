import { Component, OnInit, Input } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-icon-element',
  templateUrl: './icon-element.component.html',
  styleUrls: ['./icon-element.component.css']
})
export class IconElementComponent extends ColumnElement implements OnInit {

  ngOnInit() {
  }

}
