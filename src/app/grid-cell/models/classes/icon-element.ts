import { Element } from './element';
import { IconElementOptions } from './icon-element-options';

export class IconElement extends Element {
  iconClass: string | Function;
  showIcon: (data: {}) => boolean;

  constructor(iconClass: string | Function, options?: IconElementOptions) {
    super();
    this.type = 'icon';
    this.iconClass = iconClass;
    if (options) {
      Object.assign(this, options);
    }
  }
}
