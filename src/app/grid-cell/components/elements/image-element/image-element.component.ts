import { Component, OnInit } from '@angular/core';
import { BaseElementComponent } from 'src/app/grid-cell/models/classes/base-element-component';

@Component({
  selector: 'tld-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent extends BaseElementComponent implements OnInit {
  ngOnInit() {
  }
}
