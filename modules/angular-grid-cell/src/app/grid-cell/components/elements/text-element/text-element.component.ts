import { Component, Input, OnInit } from '@angular/core';
import { BaseElementComponent } from '../../../../grid-cell/models/classes/base-element-component';
import { TextElement } from './classes/text-element';

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends BaseElementComponent implements OnInit {
  elementData: string;
  @Input() element: TextElement;
  @Input() data: any;

  ngOnInit(): void {
    if (this.data == null) {
      return;
    }
    if (typeof (this.element.elementField) === 'string') {
      if (this.element.elementField.indexOf('.') !== -1) {
        const fields = this.element.elementField.split('.');
        let value = this.data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          value = value[fields[i]];
        }
        this.elementData = value;
      } else {
        this.elementData = this.data[this.element.elementField];
      }
    } else {
      this.elementData = this.element.elementField(this.data);
    }
  }
}
