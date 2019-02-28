import { IColumnElementOptions } from './IColumnElementOptions';

export interface IIconColumnElementOptions extends IColumnElementOptions {
  showIcon?: (data: {}) => boolean;
}
