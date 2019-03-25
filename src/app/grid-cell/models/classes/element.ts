import { GenerateIdAttr } from '../types/generate-id-attr';
import { ElementBase } from './element-base';

export abstract class Element extends ElementBase {
    id?: string | GenerateIdAttr;
}
