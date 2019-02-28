export interface IColumnElementOptions {
  field?: string;
  class?: string;
  tooltip?: string;
  getNgClass?: (data: {}) => {};
  onClick?: (data: any) => any;
}
