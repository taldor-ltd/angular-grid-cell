import { Element } from '../../../../models/classes/element';

export class ButtonElement extends Element {
  buttonText: string;

  constructor(buttonText: string, options?: Element) {
    super();
    this['type'] = 'button';
    this.buttonText = buttonText;
    if (options) {
      Object.assign(this, options);
    }
  }
}
