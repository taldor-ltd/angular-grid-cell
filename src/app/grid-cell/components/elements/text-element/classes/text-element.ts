import { Element } from 'src/app/grid-cell/models/classes/element';
import { ElementBase } from 'src/app/grid-cell/models/classes/element-base';

export class TextElement extends Element {

  constructor(field: string | Function, options?: ElementBase) {
    super();
    this['type'] = 'text';
    this.field = field;
    if (options) {
      Object.assign(this, options);
    }
  }
}
