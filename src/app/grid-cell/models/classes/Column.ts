import { IColumnElement } from '../interfaces/IColumnElement';
import { IColumnOptions } from '../interfaces/IColumnOptions';

export class Column extends IColumnOptions {
  elements: IColumnElement[];
  header: string;
  field: string | Function = () => {};

  constructor(elements: IColumnElement | IColumnElement[], columnOptions: IColumnOptions) {
    super();
    if (elements instanceof Array) {
      this.elements = elements;
    } else {
      this.elements = [elements];
    }
    Object.assign(this, columnOptions);
  }
}
