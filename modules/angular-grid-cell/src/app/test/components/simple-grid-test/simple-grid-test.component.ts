import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Column } from 'src/app/grid-cell/models/classes/column';
import { TextElement } from 'src/app/grid-cell/components/elements/text-element/classes/text-element';
import { ImageElement } from 'src/app/grid-cell/components/elements/image-element/classes/image-element';
import { IconElement } from 'src/app/grid-cell/components/elements/icon-element/classes/icon-element';
import { DateTimeElement } from 'src/app/grid-cell/components/elements/date-time-element/classes/date-time-element';
import { MomentFunc } from 'src/app/grid-cell/models/enums/moment-func.enum';
import { ButtonElement } from 'src/app/grid-cell/components/elements/button-element/classes/button-element';
import { CellComponent } from 'src/app/grid-cell/components/cell/cell.component';
import { HtmlElement } from 'src/app/grid-cell/components/elements/html-element/classes/html-element';
import { TestModule } from '../../test.module';

@Component({
  selector: 'tld-simple-grid-test',
  templateUrl: './simple-grid-test.component.html',
  styleUrls: ['./simple-grid-test.component.css'] // ,
  // entryComponents: [
  //   TestMeComponent
  // ]
})
export class SimpleGridTestComponent implements OnInit {
  cars: any[];
  cols: Column[];
  years: number[];
  filterYears: number[];
  @ViewChildren('cell') myCells: QueryList<CellComponent>;

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
      ),
      new Column(
        new ButtonElement(
          'change name', {
          elementId: 'btnCN',
          onClick: this.updateBtnName.bind(this)
        }), {
          header: 'change btn my name'
        }
      ),
      new Column(new HtmlElement(this.buildHtml.bind(this), this, TestModule), { header: 'my input field' }),
      new Column(
        new HtmlElement(
          `<input [(ngModel)]="data.year">`,
          this,
          [ FormsModule ]
        ),
        { header: 'my input field' }
      )
    ];
    this.years = [ 2010, 2011, 2012, 2013, 2014];
  }

  search(event) {
    this.filterYears = this.years.filter((year: number) => year.toString().includes(event.query));
  }

  buildHtml(data: any) {
    return `<tld-test-me [year]="getYear(data)"></tld-test-me>`;
  }

  getYear(data): number {
    return data.year;
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
    console.log('in tooltipFunction()');
    return `<b><u>${data.vin}</u></b>`;
  }

  addDate(data: any) {
    return new Date(data.updateDate).setHours(12, 12, 12, 12);
  }

  updateBtnName(data: any): void {
    // const rowCells = this.myCells.filter(c => c.data === data);
    // const btnCell = rowCells.find(current => {
    //   return current.cellElements.find(el => el.elementId === 'btnCN');
    // });
    // const btn = btnCell.cellElements.find(el => el.elementId === 'btnCN');
    // (<ButtonElement>btn).buttonText = 'changed!';
  }


}
