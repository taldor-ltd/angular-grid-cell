import { IColumnElement } from '../interfaces/IColumnElement';
import { IImageColumnElementOptions } from '../interfaces/IImageColumnElementOptions';

export class ImageColumnElement implements IColumnElement {
  type: string;
  image: string | ((data: any) => string);
  width: string;
  showImage: (data: {}) => boolean;
  errorImage: string;

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

  private getErrorImage(img: HTMLImageElement): void {
    if (img) {
      if (!img.src.includes(this.errorImage)) {
        img.src = this.errorImage;
      } else {
        img.src = 'assets/img/broken-img.png';
      }
    }
  }
}
