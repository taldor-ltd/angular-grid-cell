import { Component, Input } from '@angular/core';
import { BaseElementComponent } from '../../../../grid-cell/models/classes/base-element-component';
import { TextElement } from './classes/text-element';

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends BaseElementComponent {
  @Input() element: TextElement;
}
