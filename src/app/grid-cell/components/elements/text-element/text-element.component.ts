import { Component, OnInit, Input } from '@angular/core';
import { IColumnElement } from 'src/app/grid-cell/models/interfaces/IColumnElement';


@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent implements OnInit {

  @Input() columnElement: IColumnElement;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
