import { Component, OnInit, Input } from '@angular/core';
import { IColumnElement } from 'src/app/grid-cell/models/interfaces/IColumnElement';

@Component({
  selector: 'tld-icon-element',
  templateUrl: './icon-element.component.html',
  styleUrls: ['./icon-element.component.css']
})
export class IconElementComponent implements OnInit {

  @Input() columnElement: IColumnElement;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
