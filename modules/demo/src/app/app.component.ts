import { Component } from '@angular/core';
import { ElementType } from './element-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  element: ElementType = ElementType.text;
  ElementType = ElementType;
}
