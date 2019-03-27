import { Element } from '../../../../../grid-cell/models/classes/element';

export class TextElement extends Element {

  constructor(field: string | Function, options?: Element) {
    super();
    this['type'] = 'text';
    this.elementField = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
