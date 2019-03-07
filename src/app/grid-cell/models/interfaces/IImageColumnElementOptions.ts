import { IColumnElementOptions } from './IColumnElementOptions';

export interface IImageColumnElementOptions extends IColumnElementOptions {
  width?: string;
  showImage?: (data: {}) => boolean;
}
