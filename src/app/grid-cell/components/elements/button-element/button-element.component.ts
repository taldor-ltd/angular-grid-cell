import { Component, OnInit } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';

@Component({
  selector: 'tld-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent extends BaseElementComponent implements OnInit {
  ngOnInit() {
  }

}
