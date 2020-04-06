import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { GridCellConfigProvider } from 'src/app/grid-cell/config/grid-cell-config-provider';

@Component({
  selector: 'tld-rtl-grid',
  templateUrl: './rtl-grid.component.html',
  styleUrls: ['./rtl-grid.component.css'],
  providers: [
    {
      provide: GridCellConfigProvider,
      useValue: {
        config: {
          rtl: true
        }
      }
    }
  ]
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
      new Column(new TextElement('year'), { header: 'Year', width: '300px' }),
      new Column(new TextElement('vin'), { header: 'Vin', width: '300px' })
    ];
  }

}
