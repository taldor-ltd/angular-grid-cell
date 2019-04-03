import { Element } from '../../../../models/classes/element';

export abstract class ImageElementBase extends Element {
  width?: string;
  showImage?: (data: {}) => boolean;
  errorImage?: string;
}
