import { Input, HostListener } from '@angular/core';

import { GenerateIdAttr } from '../types/generate-id-attr';
import { ColumnElementOptions } from './column-element-options';

export class ColumnElement extends ColumnElementOptions {
  type: string;
  id?: string | GenerateIdAttr;
  @Input() columnElement: ColumnElement;
  @Input() data: any;

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    if (this.columnElement.onClick) {
      this.columnElement.onClick(this.data, event);
    }
  }
}
