import { GenerateIdAttr } from '../types/generate-id-attr';
import { ElementOptions } from './element-options';

export class Element extends ElementOptions {
    type: string;
    id?: string | GenerateIdAttr;
}
