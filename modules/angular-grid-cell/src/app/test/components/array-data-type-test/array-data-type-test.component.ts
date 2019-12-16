import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { IconElement } from 'src/app/grid-cell/components/elements/icon-element/classes/icon-element';
import { ImageElement } from 'src/app/grid-cell/components/elements/image-element/classes/image-element';

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
      new Column(new TextElement('vin'), { header: 'Vin' }),
      new Column(new TextElement('year'), { header: 'Year' }),
      new Column(new TextElement('brand'), { header: 'Brand' }),
      new Column(new TextElement('color'), { header: 'Color' }),
      new Column(
        [
          new TextElement(this.getDescForCarOption.bind(this), { tooltip: 'this is a tooltip' }),
          new IconElement(this.getIconForCarOptionGroupBy.bind(this))
        ],
        { header: 'Options with groupBy', field: 'options', groupByField: 'id' }
      ),
      new Column(
        [
          new TextElement('desc'),
          new IconElement(this.getIconForCarOption.bind(this))
        ],
        { header: 'Options without groupBy', field: 'options' }
      ),
      new Column(
        new ImageElement('https://avatars2.githubusercontent.com/u/5260028?s=88&v=4', { width: '100%' }),
        { header: 'image with width set' }
      ),
      new Column(
        new ImageElement('https://avatars2.githubusercontent.com/u/5260028?s=88&v=4'),
        { header: 'image without width set' }
      )
    ];
  }

  private getDescForCarOption(option: any): string {
    const desc = option.value.reduce((p, c) => {
      return p.desc + ' ,' + c.desc;
    });
    if (typeof desc === 'string') {
      return desc;
    } else {
      return option.value[0].desc;
    }
  }

  private getIconForCarOption(option: any): string {
    return this.getIconForCarOptionId(option.elementId);
  }

  private getIconForCarOptionGroupBy(option: any): string {
    return this.getIconForCarOptionId(+option.key);
  }


  private getIconForCarOptionId(id: number) {
    switch (id) {
      case 1:
        return 'fas fa-chess-rook';
      case 2:
        return 'fab fa-draft2digital';
      case 3:
        return 'fas fa-dharmachakra';
    }
  }
}
