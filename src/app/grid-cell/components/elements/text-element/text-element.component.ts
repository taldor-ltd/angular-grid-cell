import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ColumnElement } from 'src/app/grid-cell/models/classes/column-element';

@Component({
  selector: 'tld-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent implements OnInit {

  @Input() columnElement: ColumnElement;
  @Input() data: any;

  constructor() { }

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {
    if (this.columnElement.onClick) {
      this.columnElement.onClick(this.data, event);
    }
  }

  ngOnInit() {
  }

}
