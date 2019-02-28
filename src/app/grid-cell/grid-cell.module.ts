import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentModule } from 'ngx-moment';
import { TooltipModule } from 'primeng/tooltip';

import { CellComponent } from './components/cell/cell.component';
import { CellFunctionPipe } from './components/cell/cell-function.pipe';
import { CellNestedFieldPipe } from './components/cell/cell-nested-field.pipe';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    TooltipModule
  ],
  exports: [
    CellComponent
  ],
  declarations: [
    CellComponent,
    CellFunctionPipe,
    CellNestedFieldPipe
  ]
})
export class GridCellModule { }
