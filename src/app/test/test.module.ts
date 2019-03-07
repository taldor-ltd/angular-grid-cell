import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { TestRoutingModule } from './test-routing.module';
import { SimpleGridTestComponent } from './components/simple-grid-test/simple-grid-test.component';
import { GridCellModule } from '../grid-cell/grid-cell.module';
import { ArrayDataTypeTestComponent } from './components/array-data-type-test/array-data-type-test.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    TableModule,
    GridCellModule
  ],
  declarations: [
    SimpleGridTestComponent,
    ArrayDataTypeTestComponent
  ]
})
export class TestModule { }
