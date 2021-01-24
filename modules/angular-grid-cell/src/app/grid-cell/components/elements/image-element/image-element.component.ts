import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { ImageElement } from './classes/image-element';

@Component({
  selector: 'tld-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent extends BaseElementComponent {

  img: ElementRef;

  @Input() element: ImageElement;
  @Input() data: any;

  @ViewChild('img', { read: ElementRef }) set content(img: ElementRef) {
    if (img && !this.img) {
      this.img = img;
      setTimeout(() => {
        if (!!this.element && !!this.element.tooltip) {
          if (typeof this.element.tooltip === 'function') {
            if (!!this.data) {
              (<HTMLImageElement>this.img.nativeElement).addEventListener('mouseenter', () => this.tooltip = (<Function>this.element.tooltip)(this.data));
            } else {
              (<HTMLImageElement>this.img.nativeElement).addEventListener('mouseenter', () => this.tooltip = (<Function>this.element.tooltip)());
            }
          } else if (typeof this.element.tooltip === 'string') {
            this.tooltip = this.element.tooltip;
          }
        }
      }, 0);
    }
  }

}
