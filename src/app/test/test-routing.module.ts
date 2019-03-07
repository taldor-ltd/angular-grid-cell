import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleGridTestComponent } from './components/simple-grid-test/simple-grid-test.component';

const routes: Routes = [
  {
    path: 'simple-grid-test',
    component: SimpleGridTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
