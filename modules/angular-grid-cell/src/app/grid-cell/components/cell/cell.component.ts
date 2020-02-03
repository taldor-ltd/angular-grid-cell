import { Component, OnInit, Input } from '@angular/core';

import { Column } from '../../models/classes/column';
import { Element } from '../../models/classes/element';
import { ButtonElement } from '../elements/button-element/classes/button-element';
import { DateTimeElement } from '../elements/date-time-element/classes/date-time-element';
import { IconElement } from '../elements/icon-element/classes/icon-element';
import { ImageElement } from '../elements/image-element/classes/image-element';
import { TextElement } from '../elements/text-element/classes/text-element';

@Component({
  selector: 'tld-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  rowDataArray: any[] = null;
  cellElements: Element[];
  @Input() column: Column;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    this.cellElements = [];
    this.column.elements.forEach(element => {
      switch (element.type) {
        case 'button':
          const btnElement = new ButtonElement('');
          Object.assign(btnElement, element);
          this.cellElements.push(btnElement);
          break;
        case 'datetime':
          const datetimeElement = new DateTimeElement(null);
          Object.assign(datetimeElement, element);
          this.cellElements.push(datetimeElement);
          break;
        case 'icon':
          const iconElement = new IconElement('');
          Object.assign(iconElement, element);
          this.cellElements.push(iconElement);
          break;
        case 'image':
          const imageElement = new ImageElement('');
          Object.assign(imageElement, element);
          this.cellElements.push(imageElement);
          break;
        case 'text':
          const textElement = new TextElement('');
          Object.assign(textElement, element);
          this.cellElements.push(textElement);
          break;
      }
    });
    // If our data field is an array use it, and if it isn't use the data object as an array with one element in it
    if (this.data[this.column.field as string] instanceof Array) {
      this.rowDataArray = this.data[this.column.field as string];
    }
  }

}
