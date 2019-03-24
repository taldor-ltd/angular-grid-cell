import { ElementOptions } from './element-options';

export class ImageElementOptions extends ElementOptions {
  width?: string;
  showImage?: (data: {}) => boolean;
  errorImage?: string;
}
