import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/Column';
import { TextColumnElement } from 'src/app/grid-cell/models/classes/TextColumnElement';
import { ImageColumnElement } from 'src/app/grid-cell/models/classes/ImageColumnElement';

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
      { vin: 'dsad231ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png' },
      { vin: 'dsad231ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png' }
    ];

    this.cols = [
      new Column(new TextColumnElement('vin', { onClick: (data, event) => alert(event.clientX)}), { header: 'Vin' }),
      new Column(new TextColumnElement('year'), { header: 'Year' }),
      new Column(new TextColumnElement('brand'), { header: 'Brand' }),
      new Column(new TextColumnElement('color'), { header: 'color' }),
      new Column(new ImageColumnElement((data) => data.pic, { errorImage: '/assets/img/bad.png' }), {header: 'image'}),
      new Column(new ImageColumnElement((data) => data.pic, { errorImage: '/assets/img/bad1.png' }), {header: 'image'})
    ];
  }

}
