import { IColumnElement } from '../interfaces/IColumnElement';
import { IImageColumnElementOptions } from '../interfaces/IImageColumnElementOptions';

export class ImageColumnElement implements IColumnElement {
  type: string;
  image: string | ((data: any) => string);
  width: string;
  showImage: (data: {}) => boolean;

  constructor(image: string | ((data: any) => string), options?: IImageColumnElementOptions) {
    this.type = 'image';
    this.image = image;
    if (options) {
      Object.assign(this, options);
    }
    if (!this.width) {
      this.width = 'unset';
    }
  }
}
