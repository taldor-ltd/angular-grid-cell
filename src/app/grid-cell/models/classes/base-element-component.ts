import { Input, HostListener } from '@angular/core';
import { Element } from './element';

export abstract class BaseElementComponent {

  @Input() element: Element;
  @Input() data: any;

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    if (this.element.onClick) {
      this.element.onClick(this.data, event);
    }
  }
}
