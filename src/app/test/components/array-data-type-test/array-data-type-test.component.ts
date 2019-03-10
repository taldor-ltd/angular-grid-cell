import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/Column';
import { TextColumnElement } from 'src/app/grid-cell/models/classes/TextColumnElement';
import { IconColumnElement } from 'src/app/grid-cell/models/classes/IconColumnElement';
import { ImageColumnElement } from 'src/app/grid-cell/models/classes/ImageColumnElement';

@Component({
  selector: 'tld-array-data-type-test',
  templateUrl: './array-data-type-test.component.html',
  styleUrls: ['./array-data-type-test.component.css']
})
export class ArrayDataTypeTestComponent implements OnInit {
  cars: any[];
  cols: Column[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      {
        vin: 'dsad231ff',
        year: 2012,
        brand: 'VW',
        color: 'Orange',
        options: [
          { id: 1, desc: 'chess-rook' },
          { id: 1, desc: 'address-book' },
          { id: 2, desc: 'draft2digital' },
          { id: 3, desc: 'dharmachakra' }
        ]
      },
      {
        vin: 'dsad231ff',
        year: 2012,
        brand: 'VW',
        color: 'Orange',
        options: [
          { id: 1, desc: 'chess-rook' },
          { id: 1, desc: 'address-book' },
          { id: 2, desc: 'draft2digital' },
          { id: 3, desc: 'dharmachakra' }
        ]
      },
      {
        vin: 'dsad231ff',
        year: 2012,
        brand: 'VW',
        color: 'Orange',
        options: [
          { id: 1, desc: 'chess-rook' },
          { id: 1, desc: 'address-book' },
          { id: 2, desc: 'draft2digital' },
          { id: 3, desc: 'dharmachakra' }
        ]
      }
    ];

    this.cols = [
      new Column(new TextColumnElement('vin'), { header: 'Vin' }),
      new Column(new TextColumnElement('year'), { header: 'Year' }),
      new Column(new TextColumnElement('brand'), { header: 'Brand' }),
      new Column(new TextColumnElement('color'), { header: 'Color' }),
      new Column(
        [
          new TextColumnElement('desc'),
          new IconColumnElement(this.getIconForCarOption)
        ],
        { header: 'Options', field: 'options', groupByField: 'id' }
      ),
      new Column(
        new ImageColumnElement('https://avatars2.githubusercontent.com/u/5260028?s=88&v=4', { width: '100%' }),
        { header: 'image with width set' }
      ),
      new Column(
        new ImageColumnElement('https://avatars2.githubusercontent.com/u/5260028?s=88&v=4'),
        { header: 'image without width set' }
      )
    ];
  }

  private getIconForCarOption(option: any): string {

    return 'fas fa-' + option.desc;

    switch (option.id) {
      case 1:
        return 'fas fa-chess-rook';
      case 2:
        return 'fab fa-draft2digital';
      case 3:
        return 'fas fa-dharmachakra';
    }

  }

}
