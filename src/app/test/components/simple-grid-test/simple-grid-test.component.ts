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
      { vin: 'ds31ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png' },
      { vin: '23431ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png' }
    ];

    this.cols = [
      new Column(
        new TextColumnElement('vin', { onClick: (data, event) => alert(event.clientX), id: (data) => data.vin }),
        { header: 'Vin' }
      ),
      new Column(new TextColumnElement('year', { id: 'year'}), { header: 'Year' }),
      new Column(new TextColumnElement('brand'), { header: 'Brand' }),
      new Column(new TextColumnElement('color'), { header: 'color' }),
      new Column(new ImageColumnElement((data) => data.pic, { errorImage: '/assets/img/bad.png' }), {header: 'image'}),
      new Column(new ImageColumnElement((data) => data.pic, { errorImage: '/assets/img/bad1.png' }), {header: 'image'})
    ];
  }

}
