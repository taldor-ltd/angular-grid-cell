import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { ImageElement } from 'src/app/grid-cell/components/elements/image-element/classes/image-element';
import { IconElement } from 'src/app/grid-cell/components/elements/icon-element/classes/icon-element';

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
      { vin: '23431ff', year: 2013, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png' }
    ];

    this.cols = [
      new Column(
        new TextElement('vin', { onClick: (data, event) => alert(`vin: ${data.vin}, x: ${event.clientX}`), id: (data) => data.vin }),
        { header: 'Vin' }
      ),
      new Column(new TextElement('year', { id: 'year'}), { header: 'Year', id: (car) => `year-${car.year}` }),
      new Column(new TextElement('brand'), { header: 'Brand' }),
      new Column(new TextElement('color'), { header: 'color' }),
      new Column(
        new ImageElement(
          (data) => data.pic,
          { errorImage: '/assets/img/bad.png', onClick: () => alert('I clicked this image!') }
        ),
        {header: 'image'}
      ),
      new Column(new ImageElement((data) => data.pic, { errorImage: '/assets/img/bad1.png' }), {header: 'image'}),
      new Column(
        new IconElement('fab fa-acquisitions-incorporated', { showIcon: (data: any) => true}),
        { header: 'icon'}
      )
    ];
  }

}
