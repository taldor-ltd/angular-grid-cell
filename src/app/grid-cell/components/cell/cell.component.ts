import { Component, OnInit, Input } from '@angular/core';

import { Column } from '../../models/classes/Column';

@Component({
  selector: 'tld-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() column: Column;
  @Input() data: any;
  rowDataArray: any[];

  constructor() { }

  ngOnInit() {
    // If our data field is an array use it, and if it isn't use the data object as an array with one element in it
    if (this.data[this.column.field as string] instanceof Array) {
      this.rowDataArray = this.data[this.column.field as string];
    } else {
      this.rowDataArray = [this.data];
    }
  }

}
