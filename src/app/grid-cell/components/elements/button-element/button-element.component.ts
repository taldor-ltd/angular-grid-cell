import { Component, Input } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';
import { ButtonElement } from './classes/button-element';

@Component({
  selector: 'tld-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent extends BaseElementComponent {
  @Input() element: ButtonElement;
}
