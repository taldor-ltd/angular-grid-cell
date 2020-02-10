import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TestRoutingModule } from './test-routing.module';
import { SimpleGridTestComponent } from './components/simple-grid-test/simple-grid-test.component';
import { GridCellModule } from '../grid-cell/grid-cell.module';
import { ArrayDataTypeTestComponent } from './components/array-data-type-test/array-data-type-test.component';
import { TestMeComponent } from './components/test-me/test-me.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    GridCellModule
  ],
  declarations: [
    SimpleGridTestComponent,
    ArrayDataTypeTestComponent,
    TestMeComponent
  ],
  entryComponents: [
    TestMeComponent
  ]
})
export class TestModule { }
