import { Element } from 'src/app/grid-cell/models/classes/element';

export class TextElement extends Element {

  constructor(field: string | Function, options?: Element) {
    super();
    this['type'] = 'text';
    this.field = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
