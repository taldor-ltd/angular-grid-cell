import { Element } from './element';
import { ColumnOptions } from './column-options';


export class Column {
  elements: Element[];
  header: string;
  field: string | Function = () => { };

  constructor(elements: Element | Element[], columnOptions: ColumnOptions) {

    if (elements instanceof Array) {
      this.elements = elements;
    } else {
      this.elements = [elements];
    }
    Object.assign(this, columnOptions);
  }
}
