import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { ImageElement } from 'src/app/grid-cell/components/elements/image-element/classes/image-element';
import { IconElement } from 'src/app/grid-cell/components/elements/icon-element/classes/icon-element';
import { DateTimeElement } from 'src/app/grid-cell/components/elements/date-time-element/classes/date-time-element';
import { MomentPipe } from 'src/app/grid-cell/models/enums/moment-pipe.enum';

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
      { vin: 'ds31ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png', timeAgo: '2019-03-26' },
      { vin: '23431ff', year: 2013, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png', timeAgo: '2019-03-01' }
    ];

    this.cols = [
      new Column(
        new TextElement('vin', { onClick: (data, event) => alert(`vin: ${data.vin}, x: ${event.clientX}`), elementId: (data) => data.vin }),
        { header: 'Vin' }
      ),
      new Column(new TextElement('year', { elementId: 'year'}), { header: 'Year', columnId: (car) => `year-${car.year}` }),
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
      ),
      new Column(
        new DateTimeElement(MomentPipe.amTimeAgo, { elementField: 'timeAgo'}),
        { header: 'Time Ago'}
      )
    ];
  }

}
