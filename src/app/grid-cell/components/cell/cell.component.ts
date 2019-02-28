import { Component, OnInit, Input } from '@angular/core';

import { Column } from '../../models/classes/Column';

@Component({
  selector: 'tld-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() column: Column;
  @Input() data: {};

  constructor() { }

  ngOnInit() {
  }

}
