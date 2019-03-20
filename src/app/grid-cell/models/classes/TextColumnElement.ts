import { ColumnElement } from './column-element';
import { ColumnElementOptions } from './column-element-options';

export class TextColumnElement extends ColumnElement {
  type: string;

  constructor(field: string | Function, options?: ColumnElementOptions) {
    super();
    this.type = 'text';
    this.field = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
