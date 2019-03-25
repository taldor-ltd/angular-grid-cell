import { IconElementBase } from './icon-element-base';

export class IconElement extends IconElementBase {
  iconClass: string | Function;

  constructor(iconClass: string | Function, options?: IconElementBase) {
    super();
    this['type'] = 'icon';
    this.iconClass = iconClass;
    if (options) {
      Object.assign(this, options);
    }
  }
}
