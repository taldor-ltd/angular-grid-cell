import { GenerateIdAttr } from '../types/generate-id-attr';

export abstract class Element {
  type?: string;
  elementField?: string | ((data) => any);
  elementId?: string | GenerateIdAttr;
  class?: string;
  tooltip?: string | Function;
  tooltipAsDataTitle?: boolean;
  getNgClass?: (data: {}) => {};
  onClick?: (data: any, event: MouseEvent) => any;
}
