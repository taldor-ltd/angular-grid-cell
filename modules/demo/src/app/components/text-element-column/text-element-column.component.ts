import { Component, OnInit } from '@angular/core';

import { Column, TextElement } from '@taldor-ltd/angular-grid-cell';
import { Car } from 'src/app/models/car';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-text-element-column',
  templateUrl: './text-element-column.component.html',
  styleUrls: ['./text-element-column.component.css']
})
export class TextElementColumnComponent implements OnInit {
  cars: Car[];
  cols: Column[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCars().subscribe(
      cars => this.cars = cars
    );
    this.cols = [
      new Column(new TextElement('make'), { header: 'Make' }),
      new Column(new TextElement('model', { onClick: (data) => alert(`This is your data: ${data.model}`) }), { header: 'Model' }),
      new Column(new TextElement('color'), { header: 'Color' })
    ];
  }

}
