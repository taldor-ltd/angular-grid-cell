import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/Column';
import { TextColumnElement } from 'src/app/grid-cell/models/classes/TextColumnElement';

@Component({
  selector: 'tld-simple-grid-test',
  templateUrl: './simple-grid-test.component.html',
  styleUrls: ['./simple-grid-test.component.css']
})
export class SimpleGridTestComponent implements OnInit {
  cars: any[];
  cols: Column[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      { vin: 'dsad231ff', year: 2012, brand: 'VW', color: 'Orange' }
    ];

    this.cols = [
      new Column(new TextColumnElement('vin'), { header: 'Vin' }),
      new Column(new TextColumnElement('year'), { header: 'Year' }),
      new Column(new TextColumnElement('brand'), { header: 'Brand' }),
      new Column(new TextColumnElement('color'), { header: 'color' })
    ];
  }

}
