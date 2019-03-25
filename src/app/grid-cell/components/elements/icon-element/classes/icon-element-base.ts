import { Element } from 'src/app/grid-cell/models/classes/element';

export abstract class IconElementBase extends Element {
  showIcon?: (data: any) => boolean;
}
