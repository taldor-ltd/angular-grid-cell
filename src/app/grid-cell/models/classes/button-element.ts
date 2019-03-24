import { Element } from './element';
import { ElementOptions } from './element-options';

export class ButtonElement extends Element {
  buttonStyle: string;
  buttonText: string;

  constructor(buttonText: string, buttonStyle: string, options?: ElementOptions) {
    super();
    this.type = 'button';
    this.buttonText = buttonText;
    this.buttonStyle = buttonStyle;
    if (options) {
      Object.assign(this, options);
    }
  }
}
