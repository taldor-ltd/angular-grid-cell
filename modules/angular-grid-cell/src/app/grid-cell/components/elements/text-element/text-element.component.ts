import { Component, Input } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { TextElement } from './classes/text-element';

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends BaseElementComponent {
  @Input() element: TextElement;
  @Input() data: any;

  public get elementData(): string {
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
        return value;
      } else {
        return this.data[this.element.elementField];
      }
    } else {
      return this.element.elementField(this.data);
    }
  }

}
