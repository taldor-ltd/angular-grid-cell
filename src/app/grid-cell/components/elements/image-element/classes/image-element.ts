import { ImageElementBase } from './image-element-base';

export class ImageElement extends ImageElementBase {
  image: string | ((data: any) => string);
  width: string;
  showImage: (data: {}) => boolean;
  errorImage: string;

  constructor(image: string | ((data: any) => string), options?: ImageElementBase) {
    super();
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
