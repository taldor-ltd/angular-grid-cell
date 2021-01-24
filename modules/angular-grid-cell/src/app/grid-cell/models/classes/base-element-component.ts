import { Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Element } from './element';

export abstract class BaseElementComponent {
  span: ElementRef;
  tooltip: string;
  dataTitleTooltip: string;

  @Input() element: Element;
  @Input() data: any;
  @ViewChild('span', { read: ElementRef }) set content(span: ElementRef) {
    if (span && !this.span) {
      this.span = span;
      setTimeout(() => {
        if (!!this.element && !!this.element.tooltip) {
          if (typeof this.element.tooltip === 'function') {
            if (!!this.data) {
              (<HTMLElement>this.span.nativeElement).addEventListener('mouseenter', () => {
                if (this.element.tooltipAsDataTitle) {
                  this.dataTitleTooltip = (<Function>this.element.tooltip)(this.data);
                } else {
                  this.tooltip = (<Function>this.element.tooltip)(this.data);
                }
              });
            } else {
              (<HTMLElement>this.span.nativeElement).addEventListener('mouseenter', () => {
                if (this.element.tooltipAsDataTitle) {
                  this.dataTitleTooltip = (<Function>this.element.tooltip)();
                } else {
                  this.tooltip = (<Function>this.element.tooltip)();
                }
              });
            }
          } else if (typeof this.element.tooltip === 'string') {
            if (this.element.tooltipAsDataTitle) {
              this.dataTitleTooltip = this.element.tooltip;
            } else {
              this.tooltip = this.element.tooltip;
            }
          }
        }
      }, 0);
    }
  }

  constructor() {

  }

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    if (this.element.onClick) {
      this.element.onClick(this.data, event);
    }
  }


}
