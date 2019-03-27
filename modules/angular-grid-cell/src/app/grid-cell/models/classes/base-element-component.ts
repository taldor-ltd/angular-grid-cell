import { Input, HostListener } from '@angular/core';
import { Element } from './element';

export abstract class BaseElementComponent {
  element: Element;
  data: any;

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    if (this.element.onClick) {
      this.element.onClick(this.data, event);
    }
  }
}
