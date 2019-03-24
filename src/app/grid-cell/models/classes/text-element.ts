import { Element } from './element';
import { ElementOptions } from './element-options';

export class TextElement extends Element {

  constructor(field: string | Function, options?: ElementOptions) {
    super();
    this.type = 'text';
    this.field = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
