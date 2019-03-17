import { Component, OnInit, Input } from '@angular/core';
import { IColumnElement } from 'src/app/grid-cell/models/interfaces/IColumnElement';

@Component({
  selector: 'tld-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent implements OnInit {

  @Input() columnElement: IColumnElement;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
