import { IColumnElement } from '../interfaces/IColumnElement';
import { IColumnElementOptions } from '../interfaces/IColumnElementOptions';

export class TextColumnElement implements IColumnElement {
  field: string | Function;
  type: string;

  constructor(field: string | Function, options?: IColumnElementOptions) {
    this.type = 'text';
    this.field = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
