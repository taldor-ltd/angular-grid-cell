import { Element } from './element';
import { ImageElementOptions } from './image-element-options';


export class ImageElement extends Element {
  
  image: string | ((data: any) => string);
  width: string;
  showImage: (data: {}) => boolean;
  errorImage: string;

  constructor(image: string | ((data: any) => string), options?: ImageElementOptions) {
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
