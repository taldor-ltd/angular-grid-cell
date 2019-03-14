import { GenerateIdAttr } from '../types/generate-id-attr';

export interface IColumnElement {
  type: string;
  id?: string | GenerateIdAttr;
}
