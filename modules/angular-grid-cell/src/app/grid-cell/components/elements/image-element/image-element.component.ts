import { Component, Input } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { ImageElement } from './classes/image-element';

@Component({
  selector: 'tld-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent extends BaseElementComponent {
  @Input() element: ImageElement;
  @Input() data: any;
}
