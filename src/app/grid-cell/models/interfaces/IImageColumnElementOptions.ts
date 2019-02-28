import { IColumnElementOptions } from './IColumnElementOptions';

export interface IImageColumnElementOptions extends IColumnElementOptions {
  showImage?: (data: {}) => boolean;
}
