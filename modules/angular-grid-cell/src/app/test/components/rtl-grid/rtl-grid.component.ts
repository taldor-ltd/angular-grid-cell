import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';

@Component({
  selector: 'tld-rtl-grid',
  templateUrl: './rtl-grid.component.html',
  styleUrls: ['./rtl-grid.component.css']
})
export class RtlGridComponent implements OnInit {
  cars: any[];
  cols: Column[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      {
        vin: 'ds31ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png', updateDate: '2019-03-26',
        options: {
          doors: 4
        }
      },
      {
        vin: '23431ff', year: 2013, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png', updateDate: '2019-03-01',
        options: {
          doors: 2
        }
      }
    ];
    this.cols = [
      new Column(new TextElement('vin'), { header: 'vin'})
    ];
  }

}
