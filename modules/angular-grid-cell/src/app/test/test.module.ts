import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestRoutingModule } from './test-routing.module';
import { SimpleGridTestComponent } from './components/simple-grid-test/simple-grid-test.component';
import { GridCellModule } from '../grid-cell/grid-cell.module';
import { ArrayDataTypeTestComponent } from './components/array-data-type-test/array-data-type-test.component';
import { TestMeComponent } from './components/test-me/test-me.component';
import { RtlGridComponent } from './components/rtl-grid/rtl-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TestRoutingModule,
    GridCellModule.forRoot({
      rtl: false
    })
  ],
  declarations: [
    RtlGridComponent,
    SimpleGridTestComponent,
    ArrayDataTypeTestComponent,
    TestMeComponent
  ],
  exports: [
    TestMeComponent
  ]
})
export class TestModule { }
