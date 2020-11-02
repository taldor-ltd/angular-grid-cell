import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleGridTestComponent } from './components/simple-grid-test/simple-grid-test.component';
import { ArrayDataTypeTestComponent } from './components/array-data-type-test/array-data-type-test.component';
import { RtlGridComponent } from './components/rtl-grid/rtl-grid.component';

const routes: Routes = [
  {
    path: 'rtl-grid',
    component: RtlGridComponent
  },
  {
    path: 'simple-grid-test',
    component: SimpleGridTestComponent
  },
  {
    path: 'array-data-type-test',
    component: ArrayDataTypeTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
