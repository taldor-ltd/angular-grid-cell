import { Element } from '../../../../models/classes/element';

export abstract class IconElementBase extends Element {
  showIcon?: (data: any) => boolean;
}
