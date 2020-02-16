import { Element } from '../../../../models/classes/element';

export class TextElement extends Element {

  constructor(field: string | ((data) => any), options?: Element) {
    super();
    this.type = 'text';
    this.elementField = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
