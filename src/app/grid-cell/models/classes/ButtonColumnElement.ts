import { IColumnElement } from '../interfaces/IColumnElement';
import { IColumnElementOptions } from '../interfaces/IColumnElementOptions';

export class ButtonColumnElement implements IColumnElement {
  type: string;
  buttonStyle: string;
  buttonText: string;

  constructor(buttonText: string, buttonStyle: string, options?: IColumnElementOptions) {
    this.type = 'button';
    this.buttonText = buttonText;
    this.buttonStyle = buttonStyle;
    if (options) {
      Object.assign(this, options);
    }
  }
}
