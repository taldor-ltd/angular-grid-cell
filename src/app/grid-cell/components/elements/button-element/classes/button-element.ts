import { Element } from 'src/app/grid-cell/models/classes/element';
import { ElementBase } from 'src/app/grid-cell/models/classes/element-base';

export class ButtonElement extends Element {
  buttonStyle: string;
  buttonText: string;

  constructor(buttonText: string, buttonStyle: string, options?: ElementBase) {
    super();
    this.type = 'button';
    this.buttonText = buttonText;
    this.buttonStyle = buttonStyle;
    if (options) {
      Object.assign(this, options);
    }
  }
}
