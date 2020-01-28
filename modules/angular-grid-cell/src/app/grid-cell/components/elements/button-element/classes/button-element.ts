import { Element } from '../../../../models/classes/element';

export class ButtonElement extends Element {
  buttonText: string | Function;

  constructor(buttonText: string | Function, buttonStyle: string, options?: Element) {
    super();
    this['type'] = 'button';
    this.buttonText = buttonText;
    if (options) {
      Object.assign(this, options);
    }
  }
}
