import { Element } from './element';
import { ColumnBase } from './column-base';

export class Column extends ColumnBase {
  elements: Element[];
  header: string;
  field: string | Function = () => { };

  constructor(elements: Element | Element[], options: ColumnBase) {
    super();
    if (elements instanceof Array) {
      this.elements = elements;
    } else {
      this.elements = [elements];
    }
    Object.assign(this, options);
  }
}
