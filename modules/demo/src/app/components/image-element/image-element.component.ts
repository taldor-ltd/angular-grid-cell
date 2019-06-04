import { Component, OnInit } from '@angular/core';
import { Column, ImageElement } from '@taldor-ltd/angular-grid-cell';

@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent implements OnInit {
  cars = [
    { vin: 'ds31ff', year: 2012, brand: 'VW', color: 'Orange', pic: '/assets/img/good.png' },
    { vin: '23431ff', year: 2013, brand: 'VW', color: 'Orange', pic: '/assets/img/trying-to-trigger-error.png' }
  ];
  cols: Column[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      new Column(new ImageElement('pic'), { header: 'Pic' })
    ];
  }

}
