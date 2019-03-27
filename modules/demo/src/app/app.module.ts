import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridCellModule } from '@taldor-ltd/angular-grid-cell';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { TextElementColumnComponent } from './components/text-element-column/text-element-column.component';

@NgModule({
  imports: [
    BrowserModule,
    TableModule,
    GridCellModule
  ],
  declarations: [
    AppComponent,
    TextElementColumnComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
