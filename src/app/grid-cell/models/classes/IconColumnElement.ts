import { IColumnElement } from '../interfaces/IColumnElement';
import { IIconColumnElementOptions } from '../interfaces/IIconColumnElementOptions';

export class IconColumnElement implements IColumnElement {
  type: string;
  iconClass: string | Function;
  showIcon: (data: {}) => boolean;

  constructor(iconClass: string | Function, options?: IIconColumnElementOptions) {
    this.type = 'icon';
    this.iconClass = iconClass;
    if (options) {
      Object.assign(this, options);
    }
  }
}
