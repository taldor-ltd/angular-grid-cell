import { Component, Input, OnInit } from '@angular/core';
import { BaseElementComponent } from '../../../models/classes/base-element-component';
import { HtmlElement } from './classes/html-element';

@Component({
  selector: 'tld-html-element',
  templateUrl: './html-element.component.html',
  styleUrls: ['./html-element.component.css']
})
export class HtmlElementComponent extends BaseElementComponent implements OnInit {

  @Input() element: HtmlElement;
  @Input() data: any;

  // constructor

  ngOnInit(): void {
  }
}
