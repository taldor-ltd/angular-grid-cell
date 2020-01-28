import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { ImageElement } from 'src/app/grid-cell/components/elements/image-element/classes/image-element';
import { IconElement } from 'src/app/grid-cell/components/elements/icon-element/classes/icon-element';
import { DateTimeElement } from 'src/app/grid-cell/components/elements/date-time-element/classes/date-time-element';
import { MomentFunc } from 'src/app/grid-cell/models/enums/moment-func.enum';
import { ButtonElement } from 'src/app/grid-cell/components/elements/button-element/classes/button-element';

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
      new Column(
        new TextElement('vin', { tooltip: this.tooltipFunction, onClick: (data, event) => alert(`vin: ${data.vin}, x: ${event.clientX}`), elementId: (data) => data.vin }),
        { header: 'Vin' }
      ),
      new Column(new TextElement('year', { elementId: 'year' }), { header: 'Year', columnId: (car) => `year-${car.year}` }),
      new Column(new TextElement('brand'), { header: 'Brand' }),
      new Column(new TextElement('color'), { header: 'color' }),
      new Column(new TextElement('options.doors'), { header: 'No\' of Doors' }),
      new Column(new TextElement((data) => `Func say: hello year ${data.year}`), { header: 'Function' }),
      new Column(
        new ImageElement(
          (data) => data.pic,
          { errorImage: '/assets/img/bad.png', onClick: () => alert('I clicked this image!') }
        ),
        { header: 'image' }
      ),
      new Column(new ImageElement((data) => data.pic, { errorImage: '/assets/img/bad1.png' }), { header: 'image' }),
      new Column(
        new IconElement('fab fa-acquisitions-incorporated', { showIcon: (data: any) => true }),
        { header: 'icon' }
      ),
      new Column(
        new DateTimeElement(MomentFunc.format, { elementField: this.addDate }),
        { header: 'Update Date - Time Ago' }
      ),
      new Column(
        new DateTimeElement(MomentFunc.format, { elementField: 'updateDate', format: 'DD/MM/YYYY' }),
        { header: 'Update Date - Format(DD/MM/YYYY)' }
      ),
      new Column(
        new ButtonElement(
          'test',
          {
            getNgClass: data => {
            return data['vin'] === 'ds31ff' ? 'btn-test' : '';
            }
          }
        ),
        { header: 'styled button' }
      ),
      new Column(
        new ButtonElement(
          data => {
            return data['vin'] === 'ds31ff' ? 'btn-vin-ds31ff' : 'btn-vin-unknown';
          }
        ),
        {
          header: 'dynamic btn text'
        }
      )
    ];
  }

  updateModel(): void {
    this.cars[0].vin = 'sdf334';
    this.cars[0].year = '2010';
    this.cars[0].brand = 'Seat';
    this.cars[0].color = 'Blue';
    this.cars[0].updateDate = '2019-04-12';
    this.cars[0].options.doors = 7;
  }

  tooltipFunction(data: any) {
    console.log("in tooltipFunction()");
    return `<b><u>${data.vin}</u></b>`;
  }

  addDate(data: any) {
    return new Date(data.updateDate).setHours(12, 12, 12, 12);
  }
}
