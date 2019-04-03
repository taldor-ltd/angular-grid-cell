import { Component, OnInit } from '@angular/core';

import { Column, TextElement } from '@taldor-ltd/angular-grid-cell';

@Component({
  selector: 'app-text-element-column',
  templateUrl: './text-element-column.component.html',
  styleUrls: ['./text-element-column.component.css']
})
export class TextElementColumnComponent implements OnInit {
  cars = [
    { vin: 'ds31ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png' },
    { vin: '23431ff', year: 2013, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png' }
  ];
  cols: Column[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      new Column(new TextElement('vin', { onClick: (data) => alert(`This is your data: ${data.vin}`) }), { header: 'Vin' })
    ];
  }

}
