import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';

import { CellComponent } from './components/cell/cell.component';
import { CellFunctionPipe } from './components/cell/cell-function.pipe';
import { CellNestedFieldPipe } from './components/cell/cell-nested-field.pipe';
import { GroupByPipe } from './components/cell/group-by.pipe';
import { TextElementComponent } from './components/elements/text-element/text-element.component';
import { ButtonElementComponent } from './components/elements/button-element/button-element.component';
import { ImageElementComponent } from './components/elements/image-element/image-element.component';
import { IconElementComponent } from './components/elements/icon-element/icon-element.component';
import { DateTimeElementComponent } from './components/elements/date-time-element/date-time-element.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    CellComponent
  ],
  declarations: [
    CellComponent,
    CellFunctionPipe,
    CellNestedFieldPipe,
    GroupByPipe,
    TextElementComponent,
    ButtonElementComponent,
    ImageElementComponent,
    IconElementComponent,
    DateTimeElementComponent
  ]
})
export class GridCellModule { }
