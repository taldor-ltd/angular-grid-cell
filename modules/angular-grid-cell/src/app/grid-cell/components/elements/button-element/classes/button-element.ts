import { Element } from '../../../../../grid-cell/models/classes/element';

export class ButtonElement extends Element {
  buttonStyle: string;
  buttonText: string;

  constructor(buttonText: string, buttonStyle: string, options?: Element) {
    super();
    this['type'] = 'button';
    this.buttonText = buttonText;
    this.buttonStyle = buttonStyle;
    if (options) {
      Object.assign(this, options);
    }
  }
}
