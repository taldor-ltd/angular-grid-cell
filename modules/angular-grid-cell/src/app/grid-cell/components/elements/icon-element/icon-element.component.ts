import { Component, Input } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';
import { IconElement } from './classes/icon-element';

@Component({
  selector: 'tld-icon-element',
  templateUrl: './icon-element.component.html',
  styleUrls: ['./icon-element.component.css']
})
export class IconElementComponent extends BaseElementComponent {
  @Input() element: IconElement;
  @Input() data: any;
}
