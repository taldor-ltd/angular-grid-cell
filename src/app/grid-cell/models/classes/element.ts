import { GenerateIdAttr } from '../types/generate-id-attr';

export abstract class Element {
  elementField?: string | Function;
  elementId?: string | GenerateIdAttr;
  class?: string;
  tooltip?: string;
  getNgClass?: (data: {}) => {};
  onClick?: (data: any, event: MouseEvent) => any;
}
