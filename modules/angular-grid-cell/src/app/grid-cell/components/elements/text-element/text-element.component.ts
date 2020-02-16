import { Component, Input, OnInit } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { TextElement } from './classes/text-element';

enum FieldType {
  text,
  nested,
  function
}

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends BaseElementComponent implements OnInit {
  fieldType: FieldType;
  FieldType = FieldType;
  nestedFields: string[];
  elementFuncValue: any;
  @Input() element: TextElement;
  @Input() data: any;

  ngOnInit(): void {
    if (this.data == null) {
      return;
    }
    if (typeof (this.element.elementField) === 'string') {
      if (this.element.elementField.indexOf('.') !== -1) {
        this.fieldType = FieldType.nested;
        this.nestedFields = this.element.elementField.split('.');
      } else {
        this.fieldType = FieldType.text;
      }
    } else {
      this.fieldType = FieldType.function;
      this.elementFuncValue = this.element.elementField(this.data);
    }
  }

}
